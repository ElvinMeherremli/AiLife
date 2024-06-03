import "./WhyChoose.scss";
import Aos from 'aos'

import 'aos/dist/aos.css'
import { useEffect } from "react";
function WhyChoose() {

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="WhyChoose-section">
      <div className="container max-w-[1296px]">
        <div className="row">
          <div data-aos="fade-up" data-aos-delay="100" data-aos-offset="0" data-aos-duration="1500" className="col-lg-6 col-sm-12 col-xs-12">
            <div className="content">
              <h2 className="title">
                Generate Killer Content In Minutes Not Hour{" "}
                <span>Effortlessly & Faster</span>
              </h2>
              <p className="descr">
                From blogs to emails to ad copies, auto-generate catchy,
                original, and high-converting copies in popular tones &
                languages in just a few seconds. Just pick a use case, enter
                some context, and boom. your copy is ready! Get Start Now.
              </p>
              <ul>
                <li>
                  <div className="circle">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.1"
                      viewBox="0 0 17 17"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g></g>
                      <path d="M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z"></path>
                    </svg>
                  </div>
                  <p>
                    <span>Language AI</span> to generate unique content
                  </p>
                </li>
                <li>
                  <div className="circle">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.1"
                      viewBox="0 0 17 17"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g></g>
                      <path d="M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z"></path>
                    </svg>
                  </div>
                  <p>
                    <span>30+ use cases</span> template for your needs
                  </p>
                </li>
                <li>
                  <div className="circle">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.1"
                      viewBox="0 0 17 17"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g></g>
                      <path d="M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z"></path>
                    </svg>
                  </div>
                  <p>
                    Scientific <span>copywriging formulas</span> to provide best
                    quality
                  </p>
                </li>
                <li>
                  <div className="circle">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      version="1.1"
                      viewBox="0 0 17 17"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g></g>
                      <path d="M15.418 1.774l-8.833 13.485-4.918-4.386 0.666-0.746 4.051 3.614 8.198-12.515 0.836 0.548z"></path>
                    </svg>
                  </div>
                  <p>
                    Choose from <span>120+ Languages</span> to writen content
                  </p>
                </li>
              </ul>
              <button>Try For Free</button>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-offset="0" data-aos-duration="1500" className="col-lg-6 col-sm-12 col-xs-12">
            <div class="wc_img">
              <img
                src="https://ai-life-react.vercel.app/assets/why-us-bg-b1104ab5.jpg"
                class="img-fluid"
                alt="image"
              />
              <div class="wc_year">
                <h4>20 Years of Experience from 2002</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhyChoose;
