import React, {useEffect, useState} from "react";
import "./nav.css";
import {FaCartPlus} from "react-icons/fa";
import {BsHeartFill} from "react-icons/bs";
import {NavLink} from "react-router-dom";
export default function Nav() {
  const [nav, setnav] = useState(true);
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
            <NavLink to="/">
              <li className="item">Home</li>
            </NavLink>
            <li className="item">About</li>
            <li className="item">Shop</li>
            <li className="item">Contact</li>
            <NavLink to="/Cart">
              <li className="item heart">
                <BsHeartFill />
              </li>
            </NavLink>
            <li className="item cart">
              <FaCartPlus />
              [0]
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
