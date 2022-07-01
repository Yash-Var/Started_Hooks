import "./App.css";

import React, { useState } from 'react';

const UseStateArray = () => {
    let data = [
        {
            id: 0, myName: "yash varshney", myAge: 20
        },
       
          {
            id: 1, myName: "ekansh varshney", myAge: 12

        },
        {
            id: 2, myName: "akshat varshney", myAge: 18

        },
    ];
    const [myarray,sermyarray]=useState(data);
    const update=()=>{
        sermyarray([]);
    }
    return (
        // <div>
        //     <h1 className="h1style">Name: yash varshney & age: 20</h1>
        // </div>
        
        <>

            {myarray.map((curElm) => {
                return <h1 className="h1style">Name: {curElm.myName} & Age: {curElm.myAge}</h1>
            })}

            <button className="btn" onClick={update}>clear</button>

        </>
    )
}

export default UseStateArray;