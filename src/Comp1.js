import React, { useEffect } from 'react';
import './App.css';

export default function Comp1(props) {
    const { l1, setl1 } = props;

    const btn1Click = () => {
        setl1("comp");
        // alert(l1);
    }

    useEffect(() => {
        setl1("app");
    }, [l1]);

    return (
        <div className="App" >
            <h1 >My App</h1>
            <input type="text" defaultValue={l1} />
            <button onClick={ setl1("comp")}  >bbaa</button>
        </div>
    )
}
