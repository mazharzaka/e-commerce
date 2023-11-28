import React, {useContext} from "react";
import {AiOutlineHeart, AiOutlineEye} from "react-icons/ai";
import {BsHeartbreak} from "react-icons/bs";
import {Link, useNavigate} from "react-router-dom";
import StarRatings from "react-star-ratings";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {Tooltip} from "react-tooltip";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {Classid, Filter, List, watchlist} from "../../feathers/Wish";

export default function Proudects(props) {
  const [data, setdata] = useState([]);

  const [fav, setfav] = useState([]);
  const [ids, setids] = useState([]);
  const dispatch = useDispatch();
  const usedata = useSelector((stata) => stata);
  const navigate = useNavigate();
  useEffect(() => {
    if (usedata != undefined) {
      setdata(usedata.data[0]);
      setids(usedata.Wish.ids);
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
    const item = data.find((e) => e._id == id);
    // setids([...ids, ids]);
    if (
      (item != undefined && e.target.parentElement.classList == "heart show") ||
      (item != undefined &&
        e.target.parentElement.parentElement.classList == "heart show")
    ) {
      // setfav(fav.filter((e) => e._id != id));

      dispatch(Filter(id));
    } else if (
      (item != undefined &&
        e.target.parentElement.classList == "heart show active") ||
      (item != undefined &&
        e.target.parentElement.parentElement.classList == "heart show active")
    ) {
      console.log(item.id);
      setfav([...fav, item.id]);
      dispatch(List(item));
      dispatch(Classid(id));
    }
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
          {data == undefined
            ? console.log(data)
            : props.name == "Our"
            ? data.slice(11, 23).map((e) => {
                return (
                  <div
                    className="proud-card"
                    onMouseOver={signs}
                    onMouseLeave={signsleft}>
                    <div className="ca">
                      <div className="hover" id={e._id}>
                        {" "}
                        <div
                          className={
                            ids.includes(e._id)
                              ? "heart show active"
                              : "heart show"
                          }
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="WishList">
                          <AiOutlineHeart className="h" onClick={hearthandle} />

                          <BsHeartbreak className="b" onClick={hearthandle} />
                        </div>
                        <div
                          className="heart show"
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Watch Proudect"
                          onClick={() => {
                            const watch = data.find((el) => el._id == e._id);
                            dispatch(watchlist(watch));
                            console.log(watch);
                            navigate(`/Watchlist/${e._id}`);
                          }}>
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
            : data != undefined
            ? data.map((e) => {
                return (
                  <div
                    className="proud-card"
                    onMouseOver={signs}
                    onMouseLeave={signsleft}>
                    <div className="ca">
                      <div className="hover" id={e._id}>
                        {" "}
                        <div
                          className={
                            ids.includes(e._id)
                              ? "heart show active"
                              : "heart show"
                          }
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="WishList">
                          <AiOutlineHeart className="h" onClick={hearthandle} />
                          <BsHeartbreak className="b" onClick={hearthandle} />
                        </div>
                        <div
                          className="heart show"
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Watch Proudect"
                          onClick={() => {
                            const watch = data.find((el) => el._id == e._id);
                            // dispatch(Watch(watch));
                            console.log(watch);
                            navigate(`/Watchlist/${e._id}`);
                          }}>
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
            : console.log(data)}
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
