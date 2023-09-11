import {useEffect, useState} from "react";
import "./App.css";
import About from "./componet/About";
import Home from "./componet/Home";
import Nav from "./componet/Navbar";

function App() {
  const [nav, setnav] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150 && nav) {
        const nav = document.querySelector(".nav");
        nav.classList.add("active");
        setnav(false);
      } else {
        const nav = document.querySelector(".nav");
        nav.classList.remove("active");
      }
    });
  }, []);
  return (
    <div>
      <Nav />
      <Home />
      <About />
    </div>
  );
}

export default App;
