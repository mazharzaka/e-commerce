import React, {useEffect, useState} from "react";
import "./nav.css";
import {FaCartPlus} from "react-icons/fa";
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
        <div className="logo">Mazhar</div>
        <div className="list">
          <ul className="list">
            <li className="item active">Home</li>
            <li className="item">About</li>
            <li className="item">Shop</li>
            <li className="item">Contact</li>
            <li className="item">cash</li>
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
