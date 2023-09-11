import React, {useEffect, useState} from "react";
import "./about.css";
import {Swiper, SwiperSlide} from "swiper/react";
import StarRatings from "react-star-ratings";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {AiOutlineHeart} from "react-icons/ai";
// import required modules
import {Navigation, Pagination, Autoplay} from "swiper/modules";

export default function About(props) {
  return (
    <div className="about">
      <div className="prod">
        <div className="big">TRENDING</div>
        <div className="sm">TRENDING</div>
      </div>
      <div>
        <Swiper
          autoHeight={true}
          slidesPerView={3}
          spaceBetween={20}
          // navigation={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="cards">
          {props.mdata.map((e) => {
            return (
              <SwiperSlide className="slider">
                <div className="ca">
                  <div className="image">
                    <img src={e.imageCover} />
                  </div>
                  <div className="txt">
                    <div className="lable">{e.title}</div>
                    <div className="all">
                      <div className="price">${e.price}.00</div>
                      <div className="rate">
                        {""}
                        <StarRatings
                          rating={e.ratingsAverage}
                          starRatedColor="#FFBC0B "
                          // changeRating={this.changeRating}
                          numberOfStars={5}
                          name="rating"
                          starDimension="15px"
                          starSpacing="1px"
                        />
                      </div>
                    </div>{" "}
                    <div className="add">
                      <div className="la-add">ADD TO CART +</div>
                      <div className="heart">
                        <AiOutlineHeart />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          {/* <SwiperSlide className="slider">Slide 2</SwiperSlide>
          <SwiperSlide className="slider">Slide 3</SwiperSlide>
          <SwiperSlide className="slider">Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}
