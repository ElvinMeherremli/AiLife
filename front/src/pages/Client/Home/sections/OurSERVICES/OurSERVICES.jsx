import { useContext } from "react";
import "./OurSERVICES.scss";
import { CaseApi } from "../../../../../context/ContextApi";
import { useNavigate } from "react-router-dom";

function OurSERVICES() {
  const { serverData, setServerData } = useContext(CaseApi);
  const navigate = useNavigate();
  return (
    <div className="OurSERVICES-section">
      <div className="container max-w-[1296px]">
        <div className="wrapper">
          <div className="nav-element">
            <span>OUR SERVICES</span>
            <div className="line"></div>
          </div>
          <h2 className="title">
            Automatically Generate High-Quality Content For{" "}
            <span>30+ Use-Cases</span>
          </h2>
        </div>
        <div className="row">
          {serverData
            ? serverData.map((elem) => (
                <div
                  className="col-12 col-lg-3"
                >
                  <div data-aos="fade-up" data-aos-duration="500"  className="card">
                    <img src={elem.img} alt="" />
                    <h3 className="title">{elem.title}</h3>
                    <p className="descr">{elem.descr}</p>
                    <button
                      onClick={() => {
                        navigate(`detail/${elem._id}`);
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
export default OurSERVICES;
