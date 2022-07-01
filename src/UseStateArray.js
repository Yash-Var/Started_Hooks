import "./App.css";

import React from 'react';

const UseStateArray = () => {
    const data = [
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
    return (
        // <div>
        //     <h1 className="h1style">Name: yash varshney & age: 20</h1>
        // </div>
        <>

            {data.map((curElm) => {
                return <h1 className="h1style">Name: {curElm.myName} & Age: {curElm.myAge}</h1>
            })};

        </>
    )
}

export default UseStateArray;