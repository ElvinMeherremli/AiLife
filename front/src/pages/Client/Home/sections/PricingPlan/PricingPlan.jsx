import './PricingPlan.scss'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function PricingPlan() {
  useEffect(() => {
    Aos.init()
  },[])
  return (
    <div className="PricingPlan-section">
      <div className="container max-w-[1296px]">
        <div className="title-top">
          <h6>PRICING PLAN</h6>
          <div className="line"></div>
        </div>
        <div className="title">
          Find A Plan That's Right For You. Every Plan Comes With A{" "}
          <span>30-Day Free </span>
          Trial
        </div>
        <div className="row wrapper mt-[70px]">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100" data-aos-offset="0" data-aos-duration="1000">
            <div className="plan-box">
              <h5 className="plan-name">free</h5>
              <h4 className="price">$0</h4>
              <p className="period">/Monthly</p>
              <p className="recomnds mt-1">Upgrade as you need</p>
              <div className="line"></div>
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
                      <path d="M1 0v17h15v-17h-15zM15 16h-13v-15h2v1.092c-0.581 0.207-1 0.757-1 1.408 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.651-0.419-1.201-1-1.408v-1.092h3v1.092c-0.581 0.207-1 0.757-1 1.408 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.651-0.419-1.201-1-1.408v-1.092h3v1.092c-0.581 0.207-1 0.757-1 1.408 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.651-0.419-1.201-1-1.408v-1.092h2v15zM5 3.5c0 0.275-0.225 0.5-0.5 0.5s-0.5-0.225-0.5-0.5 0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5zM9 3.5c0 0.275-0.225 0.5-0.5 0.5s-0.5-0.225-0.5-0.5 0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5zM13 3.5c0 0.275-0.225 0.5-0.5 0.5s-0.5-0.225-0.5-0.5 0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Generate 15k* characters</p>
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
                      <path d="M9.667 0h-7.667v17h13v-11.692l-5.333-5.308zM10 1.742l3.273 3.258h-3.273v-3.258zM3 16v-15h6v5h5v10h-11z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Access 30+ use-cases</p>
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
                      <path d="M8.5 0c-3.032 0-5.5 2.617-5.5 5.833 0 2.354 0.964 3.67 1.814 4.831 0.637 0.868 1.186 1.618 1.186 2.673v2.096c0 0.864 0.673 1.567 1.5 1.567h2c0.827 0 1.5-0.703 1.5-1.567v-2.126c0-1.045 0.517-1.735 1.17-2.609 0.815-1.091 1.83-2.447 1.83-4.865 0-3.216-2.468-5.833-5.5-5.833zM9.5 16h-2c-0.275 0-0.5-0.254-0.5-0.567v-1.633h3v1.633c0 0.313-0.225 0.567-0.5 0.567zM11.369 10.099c-0.587 0.785-1.19 1.593-1.336 2.701h-3.072c-0.152-1.102-0.754-1.927-1.34-2.727-0.797-1.088-1.621-2.213-1.621-4.24 0-2.665 2.019-4.833 4.5-4.833s4.5 2.168 4.5 4.833c0 2.085-0.829 3.194-1.631 4.266z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Built in plagiarism checker</p>
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
                      <path d="M16.647 7.017h-6.225l-1.922-5.92-1.923 5.92h-6.224l5.035 3.658-1.922 5.92 5.034-3.659 5.035 3.659-1.922-5.92 5.034-3.658zM11.633 13.977l-3.133-2.278-3.133 2.277 1.197-3.685-3.133-2.274h3.873l1.196-3.684 1.196 3.684h3.873l-3.133 2.275 1.197 3.685z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Access to premium community</p>
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
                      <path d="M1 1v15h15v-15h-15zM15 15h-13v-2h13v2zM2 12v-10h13v10h-13zM14.203 10.165l-0.697 0.717-2.417-2.349-1.554 1.676-2.486-4.415-3.401 4.975-0.826-0.564 4.31-6.303 2.604 4.622 1.317-1.422 3.15 3.063z"></path>
                    </svg>
                  </div>
                  <p className="li-para">A5 images per month with AI</p>
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
                      <path d="M13 10.008v-9.238l-11.879 4.619 11.879 4.619zM12 8.547l-8.121-3.158 8.121-3.159v6.317zM15 0v17h-1v-17h1z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Write in 30+ languages</p>
                </li>
              </ul>
              <button>Subscribe Now</button>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200" data-aos-offset="0" data-aos-duration="1000">
            <div className="plan-box">
              <h5 className="plan-name">Saver plan</h5>
              <h4 className="price">$29</h4>
              <p className="period">/Monthly</p>
              <p className="recomnds">$348 Per Year</p>
              <div className="line"></div>
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
                      <path d="M1 0v17h15v-17h-15zM15 16h-13v-15h2v1.092c-0.581 0.207-1 0.757-1 1.408 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.651-0.419-1.201-1-1.408v-1.092h3v1.092c-0.581 0.207-1 0.757-1 1.408 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.651-0.419-1.201-1-1.408v-1.092h3v1.092c-0.581 0.207-1 0.757-1 1.408 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.651-0.419-1.201-1-1.408v-1.092h2v15zM5 3.5c0 0.275-0.225 0.5-0.5 0.5s-0.5-0.225-0.5-0.5 0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5zM9 3.5c0 0.275-0.225 0.5-0.5 0.5s-0.5-0.225-0.5-0.5 0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5zM13 3.5c0 0.275-0.225 0.5-0.5 0.5s-0.5-0.225-0.5-0.5 0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Generate 15k* characters</p>
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
                      <path d="M9.667 0h-7.667v17h13v-11.692l-5.333-5.308zM10 1.742l3.273 3.258h-3.273v-3.258zM3 16v-15h6v5h5v10h-11z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Access 30+ use-cases</p>
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
                      <path d="M8.5 0c-3.032 0-5.5 2.617-5.5 5.833 0 2.354 0.964 3.67 1.814 4.831 0.637 0.868 1.186 1.618 1.186 2.673v2.096c0 0.864 0.673 1.567 1.5 1.567h2c0.827 0 1.5-0.703 1.5-1.567v-2.126c0-1.045 0.517-1.735 1.17-2.609 0.815-1.091 1.83-2.447 1.83-4.865 0-3.216-2.468-5.833-5.5-5.833zM9.5 16h-2c-0.275 0-0.5-0.254-0.5-0.567v-1.633h3v1.633c0 0.313-0.225 0.567-0.5 0.567zM11.369 10.099c-0.587 0.785-1.19 1.593-1.336 2.701h-3.072c-0.152-1.102-0.754-1.927-1.34-2.727-0.797-1.088-1.621-2.213-1.621-4.24 0-2.665 2.019-4.833 4.5-4.833s4.5 2.168 4.5 4.833c0 2.085-0.829 3.194-1.631 4.266z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Built in plagiarism checker</p>
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
                      <path d="M16.647 7.017h-6.225l-1.922-5.92-1.923 5.92h-6.224l5.035 3.658-1.922 5.92 5.034-3.659 5.035 3.659-1.922-5.92 5.034-3.658zM11.633 13.977l-3.133-2.278-3.133 2.277 1.197-3.685-3.133-2.274h3.873l1.196-3.684 1.196 3.684h3.873l-3.133 2.275 1.197 3.685z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Access to premium community</p>
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
                      <path d="M1 1v15h15v-15h-15zM15 15h-13v-2h13v2zM2 12v-10h13v10h-13zM14.203 10.165l-0.697 0.717-2.417-2.349-1.554 1.676-2.486-4.415-3.401 4.975-0.826-0.564 4.31-6.303 2.604 4.622 1.317-1.422 3.15 3.063z"></path>
                    </svg>
                  </div>
                  <p className="li-para">A5 images per month with AI</p>
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
                      <path d="M13 10.008v-9.238l-11.879 4.619 11.879 4.619zM12 8.547l-8.121-3.158 8.121-3.159v6.317zM15 0v17h-1v-17h1z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Write in 30+ languages</p>
                </li>
              </ul>
              <button>Subscribe Now</button>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300" data-aos-offset="0" data-aos-duration="1000">
            <div className="plan-box">
              <h5 className="plan-name">Unlimited plan</h5>
              <h4 className="price">$49</h4>
              <p className="period">/Monthly</p>
              <p className="recomnds">$588 Per Year</p>
              <div className="line"></div>
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
                      <path d="M1 0v17h15v-17h-15zM15 16h-13v-15h2v1.092c-0.581 0.207-1 0.757-1 1.408 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.651-0.419-1.201-1-1.408v-1.092h3v1.092c-0.581 0.207-1 0.757-1 1.408 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.651-0.419-1.201-1-1.408v-1.092h3v1.092c-0.581 0.207-1 0.757-1 1.408 0 0.827 0.673 1.5 1.5 1.5s1.5-0.673 1.5-1.5c0-0.651-0.419-1.201-1-1.408v-1.092h2v15zM5 3.5c0 0.275-0.225 0.5-0.5 0.5s-0.5-0.225-0.5-0.5 0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5zM9 3.5c0 0.275-0.225 0.5-0.5 0.5s-0.5-0.225-0.5-0.5 0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5zM13 3.5c0 0.275-0.225 0.5-0.5 0.5s-0.5-0.225-0.5-0.5 0.225-0.5 0.5-0.5 0.5 0.225 0.5 0.5z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Generate 15k* characters</p>
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
                      <path d="M9.667 0h-7.667v17h13v-11.692l-5.333-5.308zM10 1.742l3.273 3.258h-3.273v-3.258zM3 16v-15h6v5h5v10h-11z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Access 30+ use-cases</p>
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
                      <path d="M8.5 0c-3.032 0-5.5 2.617-5.5 5.833 0 2.354 0.964 3.67 1.814 4.831 0.637 0.868 1.186 1.618 1.186 2.673v2.096c0 0.864 0.673 1.567 1.5 1.567h2c0.827 0 1.5-0.703 1.5-1.567v-2.126c0-1.045 0.517-1.735 1.17-2.609 0.815-1.091 1.83-2.447 1.83-4.865 0-3.216-2.468-5.833-5.5-5.833zM9.5 16h-2c-0.275 0-0.5-0.254-0.5-0.567v-1.633h3v1.633c0 0.313-0.225 0.567-0.5 0.567zM11.369 10.099c-0.587 0.785-1.19 1.593-1.336 2.701h-3.072c-0.152-1.102-0.754-1.927-1.34-2.727-0.797-1.088-1.621-2.213-1.621-4.24 0-2.665 2.019-4.833 4.5-4.833s4.5 2.168 4.5 4.833c0 2.085-0.829 3.194-1.631 4.266z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Built in plagiarism checker</p>
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
                      <path d="M16.647 7.017h-6.225l-1.922-5.92-1.923 5.92h-6.224l5.035 3.658-1.922 5.92 5.034-3.659 5.035 3.659-1.922-5.92 5.034-3.658zM11.633 13.977l-3.133-2.278-3.133 2.277 1.197-3.685-3.133-2.274h3.873l1.196-3.684 1.196 3.684h3.873l-3.133 2.275 1.197 3.685z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Access to premium community</p>
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
                      <path d="M1 1v15h15v-15h-15zM15 15h-13v-2h13v2zM2 12v-10h13v10h-13zM14.203 10.165l-0.697 0.717-2.417-2.349-1.554 1.676-2.486-4.415-3.401 4.975-0.826-0.564 4.31-6.303 2.604 4.622 1.317-1.422 3.15 3.063z"></path>
                    </svg>
                  </div>
                  <p className="li-para">A5 images per month with AI</p>
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
                      <path d="M13 10.008v-9.238l-11.879 4.619 11.879 4.619zM12 8.547l-8.121-3.158 8.121-3.159v6.317zM15 0v17h-1v-17h1z"></path>
                    </svg>
                  </div>
                  <p className="li-para">Write in 30+ languages</p>
                </li>
              </ul>
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PricingPlan;
