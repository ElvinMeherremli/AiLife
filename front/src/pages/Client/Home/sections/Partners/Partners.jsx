import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import google from "./img/goole.png";
import amazon from "./img/amazon.png";
import linkedin from "./img/linkedin.png";
import stack from "./img/stack.png";
import walmart from "./img/walmart.png";
import "./Partners.scss";
function Partners() {
  return (
    <div className="Partners-section">
      <div className="container max-w-[1296px]">
        <div className="wrapper">
          <div className="title">
            <h2>Trusted By 6,000,000+ Company Arround The World!</h2>
          </div>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={google} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={amazon} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={linkedin} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={stack} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={walmart} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={google} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={amazon} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={linkedin} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={stack} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={walmart} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={google} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={amazon} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={linkedin} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={stack} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={walmart} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={google} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={amazon} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={linkedin} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={stack} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={walmart} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={google} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={amazon} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={linkedin} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={stack} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={walmart} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={google} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={amazon} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={linkedin} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={stack} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={walmart} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={google} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={amazon} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={linkedin} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={stack} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={walmart} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={google} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={amazon} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={linkedin} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={stack} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={walmart} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default Partners;
