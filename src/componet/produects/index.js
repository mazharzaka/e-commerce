import React, {useContext} from "react";
import {AiOutlineHeart, AiOutlineEye} from "react-icons/ai";
import {BsHeartbreak} from "react-icons/bs";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings";
import {UserContext} from "../../App";
import {useState} from "react";
import {Tooltip} from "react-tooltip";
export const Usecart = React.createContext();
export default function Proudects(props) {
  const [fav, setfav] = useState([]);
  const data = useContext(UserContext);

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
  const hearthandle = (e) => {
    var id;
    // props.shop([]);
    if (
      e.target.parentElement.classList == "heart show" ||
      "heart show active"
    ) {
      e.target.parentElement.classList.toggle("active");
      id = e.target.parentElement.parentElement.getAttribute("id");
    } else {
      e.target.parentElement.parentElement.classList.toggle("active");
      id =
        e.target.parentElement.parentElement.parentElement.getAttribute("id");
    }
    const item = data.all.find((e) => e._id == id);

    if (
      (item != undefined && e.target.parentElement.classList == "heart show") ||
      (item != undefined &&
        e.target.parentElement.parentElement.classList == "heart show")
    ) {
      setfav(fav.filter((e) => e._id != id));

      props.shop(fav.filter((e) => e._id != id));
    } else if (
      (item != undefined &&
        e.target.parentElement.classList == "heart show active") ||
      (item != undefined &&
        e.target.parentElement.parentElement.classList == "heart show active")
    ) {
      console.log(item);
      setfav([...fav, item]);
      props.shop([...fav, item]);
    }
    console.log(e.target.parentElement.className);
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
  return (
    <>
      <Tooltip id="my-tooltip" place="right-end" />
      <div className="prodects">
        {" "}
        <div className="prod">
          <div className="big">PRODUCTS</div>
          <div className="sm">{props.name} PRODUCTS</div>
        </div>
        <div className="cantain">
          {props.name == "Our"
            ? data.all.slice(11, 23).map((e) => {
                return (
                  <div
                    className="proud-card"
                    onMouseOver={signs}
                    onMouseLeave={signsleft}>
                    <div className="ca">
                      <div className="hover" id={e._id}>
                        {" "}
                        <div
                          className="heart show"
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="WishList">
                          <AiOutlineHeart className="h" onClick={hearthandle} />
                          <BsHeartbreak className="b" onClick={hearthandle} />
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
                        <div className="Quick">Quick Add</div>
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
                        <div className="add" id={e._id}>
                          <div className="la-add">ADD TO CART +</div>
                          <div className="heart">
                            <AiOutlineHeart
                              onClick={hearthandle}
                              className="h"
                            />
                            <BsHeartbreak onClick={hearthandle} className="b" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            : data.all.map((e) => {
                return (
                  <div className="proud-card">
                    <div className="ca">
                      {/* <div className="image"> </div> */}
                      <div
                        className="image"
                        onMouseOver={photo}
                        onMouseLeave={photo1}>
                        <img className="p-pic1" src={e.imageCover} />
                        <img className="p-pic2" src={e.images[1]} />
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
                        <div className="add" id={e._id}>
                          <div className="la-add">ADD TO CART +</div>
                          <div className="heart">
                            <AiOutlineHeart
                              className="h"
                              onClick={hearthandle}
                            />
                            <BsHeartbreak className="b" onClick={hearthandle} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>{" "}
        <div className="All-pro">
          {" "}
          <Link to={props.name == "Our" ? "/allproducts" : "/"}>
            {props.name == "Our" ? "All" : "Our"} PRODUCTS
          </Link>{" "}
        </div>
      </div>{" "}
      {/* <Router> </Router> */}
      {/* <Routes>
        <Route path="/Cart" element={<Cart data={fav} />} />{" "}
      </Routes> */}
      {/* <BrowserRouter>
    
     </BrowserRouter> */}{" "}
    </>
  );
}
