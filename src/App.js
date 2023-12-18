import React, {useEffect, useState} from "react";
import "./App.css";

import Home from "./componet/Home";
import Nav from "./componet/Navbar";
import axios from "axios";
// import Pic from "./componet/Pic";
import Proudects, {Usecart} from "./componet/produects";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./componet/Cart/Cart";
import {useDispatch} from "react-redux";
import {data} from "./feathers/Data";
import Watchlist from "./componet/Watchlist";
import Quick from "./componet/quickadd";

function App() {
  const [all, setall] = useState([]);
  const [cart, setcart] = useState([]);
  // console.log(cart);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then(function (response) {
        // setdata(response.data.data.slice(11, 23));
        // setmdata(response.data.data.slice(0, 10));
        // []
        console.log(response.data.data);
        dispatch(data(response.data.data));
        setall(response.data.data);
      });
  }, []);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/allproducts" exact element={<Proudects name="All" />} />
        <Route path="/" element={<Home />} />
        <Route path="/Cart" exact element={<Cart />} />
        <Route path="/Quick" exact element={<Quick />} />
        <Route path="/Watchlist/:id" exact element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
