import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../assests/banner.jpg";
import useSetTitle from "../../../hook/useSetTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

import { Pagination, Navigation } from "swiper";

const Banner = () => {
  useSetTitle("Home");
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="relative ">
          <img
            src="https://thumbs.dreamstime.com/b/camera-pencil-brush-banner-pencils-brushes-photography-design-art-concept-website-72389892.jpg"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative py-24">
            <svg
              className="absolute inset-x-0 bottom-0 text-white"
              viewBox="0 0 1160 163"
            >
              <path
                fill="currentColor"
                d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
              />
            </svg>
            <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h2 className="max-w-lg mb-6 font-sans md:text-6xl text-white font-bold tracking-tight  text-4xl sm:leading-none">
                    Welcome To My <br className="hidden md:block" />
                    Photography Studio
                  </h2>
                  <Link
                    to="/services"
                    aria-label=""
                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200  text-white hover:text-700 py-3 px-3 rounded  border-2"
                  >
                    My Services
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative ">
          <img
            src="https://www.nerdscompany.com/wp-content/uploads/2018/05/digital_photography_banner.jpg"
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative py-24">
            <svg
              className="absolute inset-x-0 bottom-0 text-white"
              viewBox="0 0 1160 163"
            >
              <path
                fill="currentColor"
                d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
              />
            </svg>
            <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h2 className="max-w-lg mb-6 font-sans md:text-6xl text-white font-bold tracking-tight  text-4xl sm:leading-none">
                    Welcome To My <br className="hidden md:block" />
                    Photography Studio
                  </h2>
                  <Link
                    to="/services"
                    aria-label=""
                    className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200  text-white hover:text-700 py-3 px-3 rounded  border-2"
                  >
                    My Services
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Banner;
