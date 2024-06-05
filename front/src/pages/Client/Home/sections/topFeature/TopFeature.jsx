import './TopFeature.scss'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './TopFeature.scss';
import { useEffect } from 'react';

function TopFeature() {
  useEffect(() => {
    Aos.init()
  },[])
  return (
    <div className="TopFeature-section">
      <div className="container max-w-[1296px]">
        <div  className="row">
          <div className="col-12 col-lg-4">
            <div data-aos="fade-up" data-aos-delay="100" data-aos-offset="0" data-aos-duration="1000" className="card">
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
                  <path d="M17 16.488c-0.063-2.687-2.778-4.999-6.521-5.609v-1.374c0.492-0.473 0.842-1.207 1.071-1.833 0.332-0.166 0.624-0.536 0.794-1.033 0.238-0.688 0.146-1.323-0.206-1.629 0.028-0.238 0.046-0.481 0.015-0.723-0.079-0.663 0.065-1.038 0.194-1.368 0.106-0.277 0.229-0.591 0.106-0.945-0.442-1.273-1.727-1.974-3.618-1.974l-0.264 0.005c-1.313 0.047-1.707 0.6-1.971 1.115-0.033 0.062-0.077 0.146-0.077 0.151-1.712 0.153-1.697 1.569-1.684 2.707l0.003 0.369c0 0.205 0.009 0.419 0.026 0.639-0.425 0.3-0.504 1.005-0.179 1.737 0.185 0.415 0.452 0.729 0.749 0.892 0.243 0.674 0.625 1.47 1.179 1.965v1.283c-3.798 0.589-6.554 2.907-6.617 5.625l-0.012 0.512h17.023l-0.011-0.512zM1.054 16c0.392-2.094 2.859-3.821 6.122-4.204l0.441-0.052v-2.666l-0.216-0.15c-0.393-0.272-0.791-0.947-1.090-1.851l-0.083-0.281-0.294-0.051c-0.053-0.019-0.208-0.153-0.33-0.428-0.075-0.168-0.104-0.312-0.112-0.415l0.51 0.143-0.096-0.749c-0.042-0.33-0.064-0.651-0.064-0.95l-0.003-0.38c-0.015-1.341 0.051-1.634 0.773-1.699 0.545-0.048 0.752-0.449 0.876-0.689 0.15-0.292 0.28-0.543 1.12-0.574l0.227-0.004c0.829 0 2.279 0.169 2.669 1.282 0 0.043-0.052 0.177-0.090 0.275-0.145 0.374-0.364 0.939-0.254 1.853 0.024 0.188-0.007 0.424-0.040 0.675l-0.089 0.805 0.441-0.048c0.008 0.104-0.004 0.269-0.075 0.472-0.097 0.289-0.242 0.438-0.237 0.454h-0.36l-0.114 0.342c-0.283 0.853-0.65 1.497-1.009 1.768l-0.198 0.15v2.726l0.438 0.055c3.211 0.401 5.641 2.123 6.030 4.192h-14.893z"></path>
                </svg>
              </div>
              <h2 className="title">6,000,000+</h2>
              <p className="descr">
                Happy copywriters, marketers & entrepreneurs
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div data-aos="fade-up" data-aos-delay="200" data-aos-offset="0" data-aos-duration="1000" className="card">
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
                  <path d="M16.499 1.843l-1.403-1.403c-0.566-0.566-1.555-0.566-2.122 0l-7.536 7.536-1.722 5.287 5.249-1.765 7.534-7.534c0.283-0.283 0.439-0.66 0.439-1.061s-0.156-0.777-0.439-1.060zM5.584 10.758l0.638-1.957 1.92 1.919-1.942 0.653-0.616-0.615zM6.832 7.996l3.986-3.986 2.11 2.11-3.986 3.986-2.11-2.11zM11.525 3.303l0.729-0.729 2.11 2.11-0.729 0.729-2.11-2.11zM15.792 3.257l-0.72 0.721-2.11-2.11 0.72-0.721c0.19-0.189 0.519-0.189 0.707 0l1.403 1.403c0.094 0.095 0.146 0.22 0.146 0.354s-0.052 0.258-0.146 0.353zM15 7.5h1v9.5h-16v-15h7.5v1h-6.5v13h14v-8.5z"></path>
                </svg>
              </div>
              <h2 className="title">4.8/5 Reviews</h2>
              <p className="descr">
                Satisfaction rating from 1300+ reviews on TrustPilot, G2 & more.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div data-aos="fade-up" data-aos-delay="300" data-aos-offset="0" data-aos-duration="1000" className="card">
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
                  <path d="M10.719 9.577v0l-0.010-0.010c-0.013-0.011-0.022-0.024-0.036-0.034l-0.003 0.004-1.67-1.282v-5.707c1.14 0.218 2 1.164 2 2.296l0.499 0.060 0.501-0.060c0-1.68-1.309-3.062-3-3.296v-1.548h-1v1.548c-1.691 0.234-3 1.616-3 3.296 0 0.942 0.421 1.838 1.151 2.473l-0.005 0.005 0.040 0.031c0 0 0 0 0 0v0l1.814 1.394v5.705c-1.14-0.218-2-1.164-2-2.296h-1c0 1.68 1.309 3.062 3 3.296v1.549h1v-1.549c1.691-0.234 3-1.616 3-3.296 0-1.006-0.469-1.939-1.281-2.579zM6.822 6.581c-0.522-0.446-0.822-1.077-0.822-1.737 0-1.132 0.86-2.078 2-2.296v4.938l-1.178-0.905zM9 14.452v-4.936l1.104 0.849c0.567 0.447 0.896 1.096 0.896 1.791 0 1.132-0.86 2.078-2 2.296z"></path>
                </svg>
              </div>
              <h2 className="title">6,000,000+</h2>
              <p className="descr">and $700 million+ saved in content writing so far</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopFeature;
