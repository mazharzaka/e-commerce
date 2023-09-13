import {useEffect, useState} from "react";
import "./App.css";
import About from "./componet/About";
import Home from "./componet/Home";
import Nav from "./componet/Navbar";
import axios from "axios";
import Pic from "./componet/Pic";
import Proudects from "./componet/produects";
function App() {
  const [data, setdata] = useState([]);
  const [mdata, setmdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then(function (response) {
        setdata(response.data.data.slice(11, 23));
        setmdata(response.data.data.slice(0, 10));
        // []
        console.log(data);
      });
  }, []);
  return (
    <div>
      <Nav />
      <Home />
      <About mdata={mdata} />
      <Pic />
      <Proudects mdata={data} />
    </div>
  );
}

export default App;
