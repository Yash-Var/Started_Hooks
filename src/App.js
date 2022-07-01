import React, { useState } from "react";
import "./App.css";

// let name="yash varshney";

const App = () => {
  let [name,setname]=useState("Welcome ");
  const upadate=()=>{
    if(name==="Welcome")
  setname("yash varshney");
  else
  setname("Welcome");
  };
  return(
    <>
    <h1>{name}</h1>
    <button onClick={upadate}>Click me pls</button>
    </>
  );
  
};
export default App;