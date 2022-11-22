import React from "react";
import "./App.css";
import {add, output} from "./utils/utility";

const App = function() {
  const sum = add (5 ,9);
  const output = add (6, 5);
  
  
  return (
    <>
    <h1>The first sum = {sum +20}</h1>
    <h2>The second sum = {output + 10}</h2>
    </>


  )
}
  

export default App;
