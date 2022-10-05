import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Products from "../Products/Products";

const DummyData = () => {
  const [dummyData, setDummyData] = useState([]);
  const getDummyData = async () => {
    let { data } = await axios.get("https://dummyjson.com/products");
    setDummyData(data.products);
  };
  useEffect(() => {
    getDummyData();
  }, []);
  return <div>

    <Products dummyData={dummyData}/>
  </div>;
};

export default DummyData;
