import React, { useState, useEffect } from 'react';
import './App.css';
import Comp2 from './Comp2';
import axios from "axios";

function App() {
  const [l1, setl1] = useState();
  const [product, setProduct] = useState({});
  const getProduct = () => {
    let url = "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
    axios.get(url).then(response => {setProduct(response.data); console.log(response.data)});
  }
  useEffect(() => {
    getProduct();
  },[]) //[] only on first load
  // let l1 = "app";
  return (
    <div className="App">
      <Comp2 product={product} />
      <input defaultValue={l1}></input>
    </div>
  );
}

export default App;
