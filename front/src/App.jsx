import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./routes/routes";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleApi, CaseApi, ReviewsApi } from "./context/ContextApi";

const router = createBrowserRouter(ROUTES);

function App() {
  const [serverData, setServerData] = useState();
  const [reviewsData, setReviewsData] = useState();
  const [articleData, setArticleData] = useState();
  useEffect(() => {
    axios.get("http://localhost:1212/api/cases").then((res) => {
      setServerData(res.data.data);
    });
    axios.get("http://localhost:1212/api/reviews").then((res) => {
      setReviewsData(res.data.data);
    });
    axios.get("http://localhost:1212/api/articles").then((res) => {
      setArticleData(res.data.data);
    });
  }, []);
  // console.log(articleData);
  return (
    <>
      <CaseApi.Provider value={{ serverData, setServerData }}>
        <ReviewsApi.Provider value={{ reviewsData, setReviewsData }}>
          <ArticleApi.Provider value={{ articleData, setArticleData }}>
            <RouterProvider router={router} />
          </ArticleApi.Provider>
        </ReviewsApi.Provider>
      </CaseApi.Provider>
    </>
  );
}

export default App;
