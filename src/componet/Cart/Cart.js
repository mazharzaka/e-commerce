import React from "react";
import "./cart.css";
import {AiOutlineHeart, AiOutlineEye} from "react-icons/ai";
import {IoIosHeartDislike} from "react-icons/io";
import {BsHeartbreak} from "react-icons/bs";
import StarRatings from "react-star-ratings";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Clear, Filter} from "../../feathers/Wish";

export default function Cart() {
  const [cart, setcart] = useState([]);
  const [data, setdata] = useState([]);
  const usedata = useSelector((stata) => stata);
  const dispatch = useDispatch();
  useEffect(() => {
    if (usedata != undefined) {
      setcart(usedata.Wish.wishlist);
      setdata(usedata.data[0]);
    }
  });
  const photo = (e) => {
    if (e.target.classList.value == "image") {
      e.target.classList.add("active");
    } else if (e.target.classList.value == "p-pic1" || "Quick") {
      e.target.parentElement.classList.add("active");
    }
  };
  const photo1 = (e) => {
    if (e.target.classList.value == "image active") {
      e.target.classList.remove("active");
    } else if (e.target.classList.value == "p-pic2" || "Quick") {
      e.target.parentElement.classList.remove("active");
    }
  };
  const hearthandle = (e, id) => {
    // var id;
    // // shop([]);
    // if (
    //   e.target.parentElement.classList == "heart show" ||
    //   "heart show active"
    // ) {
    //   e.target.parentElement.classList.toggle("active");
    //   id = e.target.parentElement.parentElement.getAttribute("id");
    // } else {
    //   e.target.parentElement.parentElement.classList.toggle("active");
    //   id =
    //     e.target.parentElement.parentElement.parentElement.getAttribute("id");
    // }
    // const item = data.find((e) => e._id == id);
    // console.log(id);
    // if (
    //   (item != undefined && e.target.parentElement.classList == "heart show") ||
    //   (item != undefined &&
    //     e.target.parentElement.parentElement.classList == "heart show")
    // ) {
    //   console.log(data.filter((e) => e._id != id));
    //   setdata(data.filter((e) => e._id != id));
    // }
    dispatch(Filter(id));
  };
  const signs = (e) => {
    if (e.target.className == "ca") {
      e.target.classList.add("active");
    } else if (e.target.parentElement.className == "ca") {
      e.target.parentElement.classList.add("active");
    } else if (e.target.parentElement.parentElement.className == "ca") {
      e.target.parentElement.parentElement.classList.add("active");
    }
  };
  const signsleft = (e) => {
    if (e.target.className == "ca active") {
      e.target.classList.remove("active");
    } else if (e.target.parentElement.className == "ca active") {
      e.target.parentElement.classList.remove("active");
    } else if (e.target.parentElement.parentElement.className == "ca active") {
      e.target.parentElement.parentElement.classList.remove("active");
    }
  };
  const Clearwishlist = () => {
    if (cart.length > 0) {
      dispatch(Clear());
    }
  };
  return (
    <div className="cart-list">
      <div className="cotain">
        <div className="big">WishList</div>
        <div className="wish">
          WishList <span>[{cart.length}]</span>
        </div>
      </div>
      <div className="card-list">
        {cart.length == 0 ? (
          <div>
            <div class="big-icon hearty">
              <IoIosHeartDislike />
            </div>
            <div className="no">Nothing on this list</div>
          </div>
        ) : (
          cart.map((e) => {
            return (
              <div
                className="proud-card"
                onMouseOver={signs}
                onMouseLeave={signsleft}
                id="list-p">
                <div className="ca">
                  <div className="hover" id={e._id}>
                    {" "}
                    <div
                      className="heart show active"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="WishList">
                      <AiOutlineHeart
                        className="h"
                        onClick={(el) => hearthandle(el, e.id)}
                      />
                      <BsHeartbreak
                        className="b"
                        onClick={(el) => hearthandle(el, e.id)}
                      />
                    </div>
                    <div
                      className="heart show"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="Watch Proudect">
                      <AiOutlineEye />
                    </div>
                  </div>
                  <div
                    className="image"
                    onMouseOver={photo}
                    onMouseLeave={photo1}>
                    <img className="p-pic1" src={e.imageCover} />
                    <img className="p-pic2" src={e.images[1]} />
                    <div className="Quick" id="btnq">
                      Quick Add
                    </div>
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
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="All-pro">
        {" "}
        <Link onClick={Clearwishlist} to={cart.length == 0 ? "/" : "/Cart"}>
          {cart.length == 0 ? "Back To Home" : "CLEAR WishList"}
        </Link>{" "}
      </div>
    </div>
  );
}
