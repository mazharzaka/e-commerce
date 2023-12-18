import React from "react";
import ReactDOM from "react-dom/client";
import {configureStore, applyMiddleware} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import App from "./App";
import Data from "./feathers/Data";
import wish from "./feathers/Wish";
import cart from "./feathers/Addquick";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore({
  reducer: {data: Data, Wish: wish, Cart: cart},
});
// console.log(store.getState());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
