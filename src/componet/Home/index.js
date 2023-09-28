import React, {useEffect} from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {FiChevronDown} from "react-icons/fi";
import {Swiper, SwiperSlide} from "swiper/react";
import About from "../About";
// import required modules
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import Pic from "../Pic";
import Proudects from "../produects";

export default function Home(props) {
  const scroll = () => {
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(1);
      if (window.scrollY > 362 && window.scrollY < 950) {
        document.querySelector(".nametit").innerHTML = "trending";
      } else if (window.scrollY < 363) {
        document.querySelector(".nametit").innerHTML = "home";
      } else if (window.scrollY > 950 && window.scrollY < 1637) {
        document.querySelector(".nametit").innerHTML = "SUMMER SALE";
      } else if (window.scrollY > 1637) {
        document.querySelector(".nametit").innerHTML = "proudects";
      }
    });
  }, []);
  return (
    <>
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
      <About />
      <Pic />
      <Proudects name="Our" shop={props.shop} />
    </>
  );
}
