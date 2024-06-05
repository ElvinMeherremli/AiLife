import { useContext, useEffect } from "react";
import { ArticleApi } from "../../../../../context/ContextApi";
import "./Article.scss";
import moment from "moment";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Article() {
  useEffect(()=>{
    Aos.init()
  },[])
  const { articleData } = useContext(ArticleApi);
  console.log(articleData);
  return (
    <div className="Article-section">
      <div className="container max-w-[1296px]">
        <div className="title-top">
          <h4>ARICLE SAMPLE</h4>
          <div className="line"></div>
        </div>
        <h2 className="title">
          All The Reviews Loved By{" "}
          <span>Copywriters, Marketers, Professionals</span> With Others
        </h2>
        <div className="row mt-[70px]" data-aos="fade-up" data-aos-delay="100" data-aos-offset="0" data-aos-duration="1000">
          {articleData
            ? articleData.map((elem) => (
                <div className="col-lg-6">
                  <div className="card">
                    <div className="row">
                      <div className="col-6 image">
                        <div className="image-content">
                          <p>{elem.name}</p>
                        </div>
                        <img
                          src={elem.img}
                          alt=""
                        />
                      </div>
                      <div className="col-6 content">
                        <div className="card-title-top">
                          <div className="username-sec">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 448 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                            </svg>
                            <h5 className="username">{elem.byWho}</h5>
                          </div>
                          <div className="date-sec">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 448 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
                            </svg>
                            <div className="date">{moment(elem.createdAt).format("MMM DD, YYYY")}</div>
                          </div>
                        </div>
                        <div className="card-title">
                          <h3>
                            {elem.title}
                          </h3>
                        </div>
                        <a href="#">Read More →</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
export default Article;
