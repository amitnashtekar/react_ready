import React from "react";
import ReactDOM from "react-dom";
import spiderImg from "./assets/Images/spiderman.png";

const App = () => {
  console.log("env varibale", process.env);
  return (
    <>
      <img src={spiderImg} />
      <h1>Hi All...hot reload!</h1>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
