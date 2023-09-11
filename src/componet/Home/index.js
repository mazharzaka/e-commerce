import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {FiChevronDown} from "react-icons/fi";
import {Swiper, SwiperSlide} from "swiper/react";

// import required modules
import {Autoplay, Pagination, Navigation} from "swiper/modules";

export default function Home() {
  const scroll = () => {
    window.scrollTo({
      top: 230,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="text">
        <h2>LE STYLIST</h2>
        <h1>wear your clothes</h1>
        <div className="butt" onClick={scroll}>
          <FiChevronDown className="down" />
        </div>
      </div>
      <div className="overlay"></div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="home">
        <SwiperSlide className="pic1"></SwiperSlide>
        <SwiperSlide className="pic2">
          {/* <div className="text">
            <h2>LE STYLIST</h2>
          </div> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
