import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

// Default theme
import "@splidejs/react-splide/css";
// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
// or only core styles
import "@splidejs/react-splide/css/core";

import "./Reviews.scss";
import { useContext, useEffect } from "react";
import { ReviewsApi } from "../../../../../context/ContextApi";


//| AOS 
import Aos from 'aos';
import 'aos/dist/aos.css';

function Reviews() {
  useEffect(()=>{
    Aos.init()
  },[])
  const { reviewsData } = useContext(ReviewsApi);
  return (
    <div className="Reviews-section">
      <div className="container max-w-[1296px]">
        <div className="title-top flex items-center">
          <h5>Reviews</h5>
          <div className="line"></div>
        </div>
        <h2 className="title">
          All The Reviews Loved By Customer Satisfaction Rating From{" "}
          <span>1300+ Reviews On TrustPilot</span>&More
        </h2>
        <div className="row mt-16">
          <div className="col-lg-5">
            <div className="iamge">
              <img
                src="https://ai-life-react.vercel.app/assets/test_img-edbdda70.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-7">
            <Splide
              style={{ height: "100%" }}
              options={{ pagination: false }}
              hasTrack={false}
            >
              <SplideTrack>
                {reviewsData
                  ? reviewsData.map((elem) => (
                      <SplideSlide>
                        <div className="card">
                          <div className="stars">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 576 512"
                              class="ratting"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 576 512"
                              class="ratting"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 576 512"
                              class="ratting"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 576 512"
                              class="ratting"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 576 512"
                              class="ratting"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                          </div>
                          <p className="review">
                            {elem.review}
                          </p>
                          <div className="user-info mt-8">
                            <div className="profile-image">
                              <img
                                src={elem.img}
                                alt=""
                              />
                            </div>
                            <div className="title">
                              <h3 className="name">{elem.name}</h3>
                              <h5 className="profession">{elem.profession}</h5>
                            </div>
                          </div>
                        </div>
                      </SplideSlide>
                    ))
                  : ""}
              </SplideTrack>

              <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev">
                  <MdOutlineArrowBackIosNew />
                </button>
                <button className="splide__arrow splide__arrow--next">
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reviews;
