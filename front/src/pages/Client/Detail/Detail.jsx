import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [oneCase, setOneCase] = useState();
  const navigate = useNavigate()
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:1212/api/cases/${id}`).then((res) => {
      setOneCase(res.data.data);
    });
  }, []);
  console.log(oneCase);
  return (
    <>
      {oneCase ? (
        <div className="detail-section flex justify-center mt-[170px]">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              style={{width: '120px', height: '120px', margin: '30px'}}
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={oneCase.img}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {oneCase.title}
              </h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {oneCase.descr}
              </p>
            </div>
          </a>
        </div>
      ) : (
        ""
      )}
      <button
      onClick={() => {
        navigate('/')
      }}
        type="button"
        class="text-gray-900 block mx-auto mt-4 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        🔙 go home 🔙
      </button>
    </>
  );
}
export default Detail;
