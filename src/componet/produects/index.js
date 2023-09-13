import React from "react";
import {AiOutlineHeart} from "react-icons/ai";
import StarRatings from "react-star-ratings";
export default function Proudects(props) {
  const photo = (e) => {
    if (e.target.classList.value == "image") {
      e.target.classList.add("active");
    } else if (e.target.classList.value == "p-pic1") {
      e.target.parentElement.classList.add("active");
    }
    console.log(e.target.classList.value);
  };
  const photo1 = (e) => {
    if (e.target.classList.value == "image active") {
      e.target.classList.remove("active");
    } else if (e.target.classList.value == "p-pic2") {
      e.target.parentElement.classList.remove("active");
    }
    // console.log(e.target.classList.value);
  };
  return (
    <div className="prodects">
      {" "}
      <div className="prod">
        <div className="big">PRODUCTS</div>
        <div className="sm">OUR PRODUCTS</div>
      </div>
      <div className="cantain">
        {props.mdata.map((e) => {
          return (
            <div className="proud-card">
              <div className="ca">
                {/* <div className="image"> </div> */}
                <div
                  className="image"
                  onMouseOver={photo}
                  onMouseLeave={photo1}>
                  <img className="p-pic1" src={e.imageCover} />
                  <img className="p-pic2" src={e.images[2]} />
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
