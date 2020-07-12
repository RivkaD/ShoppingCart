import React, {useState, useEffect } from 'react';
import axios from "axios";


export default function Comp2(props) {
    const { product } = props;
    const handelClick = () => {
        // setl1("comp");
        // getProduct();
    }
    // useEffect(() => {
        // setl1("app");
    // },[])
    return (
        <div>
            <input type="text"  />
            <button onClick={handelClick}>aaaa</button>
        </div>
    )
}