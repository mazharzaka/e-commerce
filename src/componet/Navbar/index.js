import React, {useEffect, useState} from "react";
import "./nav.css";
import {FaCartPlus} from "react-icons/fa";
import {BsHeartFill} from "react-icons/bs";
import {BsBagFill} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
export default function Nav() {
  const [nav, setnav] = useState(true);
  const cart = useSelector((state) => state.Cart.cart);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150 && nav) {
        const nav = document.querySelector(".nav");
        nav.classList.add("active");
        setnav(false);
      } else if (window.scrollY <= 150) {
        const nav = document.querySelector(".nav");
        nav.classList.remove("active");
      }
    });
  });
  return (
    <>
      <div className="pro">
        <a href="https://phenomenal-pasca-0e27e1.netlify.app">My-protifallo</a>
      </div>
      <div className="tit">
        <span className="nametit">Home</span>
      </div>
      <div className="nav">
        {" "}
        <NavLink to="/">
          <div className="logo">Mazhar</div>
        </NavLink>
        <div className="list">
          <ul className="list">
            {" "}
            <NavLink to="/" className="home-na">
              <li className="item">Home</li>
            </NavLink>
            <li className="item">About</li>
            <li className="item">Shop</li>
            <li className="item">Contact</li>
          </ul>
          <NavLink to="/Cart">
            <li className="item heart">
              <BsHeartFill />
            </li>
          </NavLink>
          <NavLink to="/Quick" className="hr">
            <li className="item cart">
              <BsBagFill />
              <span className="length">{cart.length}</span>
            </li>{" "}
          </NavLink>
        </div>
      </div>
    </>
  );
}
