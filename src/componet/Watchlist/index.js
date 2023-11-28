import React from "react";
import {NumberField, Group, Input, Button} from "react-aria-components";
import "./Watchlist.css";
import ReactImageMagnify from "react-image-magnify";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import {LiaCartPlusSolid} from "react-icons/lia";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {Navigation, Pagination, Keyboard, Thumbs} from "swiper/modules";
import {useState} from "react";
import StarRatings from "react-star-ratings";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function Watchlist() {
  const [activeThumb, setActiveThumb] = useState();
  const usedata = useSelector((stata) => stata.Wish.watchlist);
  useEffect(() => {
    if (usedata != undefined) {
      console.log(usedata);
    }
  });
  const colorr = (e) => {
    if (e.target.className == "red") {
      e.target.classList.add("active");
      document.querySelector(".blue").classList.remove("active");
    }
  };
  const colorb = (e) => {
    if (e.target.className == "blue") {
      e.target.classList.add("active");
      document.querySelector(".red").classList.remove("active");
    }
  };
  return (
    <div className="prodects">
      {usedata != undefined ? (
        <div className="watch">
          <div className="cardlist">
            <Swiper
              spaceBetween={1}
              loop={true}
              centeredSlides={false}
              slidesPerView={4}
              touchRatio={0.2}
              // centeredSlidesBounds={false}
              onSwiper={setActiveThumb}
              slideToClickedSlide={true}
              className="swipersidee">
              {usedata[0].images.map((e) => (
                <SwiperSlide>
                  <div className="watchimg">
                    <img src={e} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="sliderlist">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              loop={true}
              keyboard={true}
              thumbs={{
                swiper:
                  activeThumb && !activeThumb.destroyed ? activeThumb : null,
              }}
              modules={[Navigation, Pagination, Keyboard, Thumbs]}
              className="mySwiperlist">
              {usedata[0].images.map((e) => (
                <SwiperSlide className="sliderwatch">
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Versace",
                        isFluidWidth: true,
                        src: e,
                      },
                      largeImage: {
                        className: "large",
                        src: e,
                        width: 660,
                        height: 960,
                      },
                      enlargedImageContainerStyle: {
                        left: "1%",
                      },
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="carditems">
            <div className="maincard">
              <div className="title">{usedata[0].title}</div>
              <div className="prise">${usedata[0].price}</div>
              <div className="review">
                <div className="rate">
                  {""}
                  <StarRatings
                    rating={usedata[0].ratingsAverage}
                    starRatedColor="#FFBC0B "
                    // changeRating={this.changeRating}
                    numberOfStars={5}
                    name="rating"
                    starDimension="15px"
                    starSpacing="1px"
                  />
                </div>{" "}
                <div className="reviews">( 2 Reviews )</div>
              </div>
              <div className="category">
                <span>Category:</span> {usedata[0].category.name}
              </div>
              <div className="des">{usedata[0].description}</div>
              <div className="dataitem">
                <div className="color">
                  <div className="itemtit">Color </div>:
                  <div className="colors">
                    <div className="red active" onClick={colorr}></div>
                    <div className="blue" onClick={colorb}></div>
                  </div>
                </div>
                <div className="size">
                  <div className="itemtit">Size </div>:
                  <div className="droplist">
                    <select name="language" id="sizes">
                      <option value="javascript">Select a Size</option>
                      <option value="python">Small</option>
                      <option value="c++">Meduim</option>
                      <option value="java">Large</option>
                      <option value="java">X-Large</option>
                    </select>
                  </div>
                </div>
                <div className="qty">
                  <div className="itemtit">QTY </div>:
                  <div className="counter">
                    <NumberField defaultValue={1} minValue={0}>
                      <Group>
                        <Button slot="decrement">-</Button>
                        <Input />
                        <Button slot="increment">+</Button>
                      </Group>
                    </NumberField>
                  </div>
                </div>
              </div>
              <div className="mainbtn">
                <div className="btn">
                  <span>
                    <LiaCartPlusSolid />
                  </span>
                  Add to Cart{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        console.log(undefined)
      )}
    </div>
  );
}

export default Watchlist;
