import React, {useEffect, useState} from "react";
import "./App.css";

import Home from "./componet/Home";
import Nav from "./componet/Navbar";
import axios from "axios";
// import Pic from "./componet/Pic";
import Proudects, {Usecart} from "./componet/produects";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./componet/Cart/Cart";

export const UserContext = React.createContext();
function App() {
  const [all, setall] = useState([]);
  const [cart, setcart] = useState([]);
  // console.log(cart);
  useEffect(() => {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then(function (response) {
        // setdata(response.data.data.slice(11, 23));
        // setmdata(response.data.data.slice(0, 10));
        // []
        setall(response.data.data);
      });
  }, []);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/allproducts"
          exact
          element={
            <UserContext.Provider value={{all}}>
              <Proudects name="All" shop={setcart} />
            </UserContext.Provider>
          }
        />
        <Route
          path="/"
          element={
            <UserContext.Provider value={{all}}>
              <Home shop={setcart} />
            </UserContext.Provider>
          }
        />
        <Route path="/Cart" exact element={<Cart data={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
