import React from "react";
import ReactDOM from "react-dom";
import spiderImg from "./assets/Images/spiderman.png";

const App = () => {
  return (
    <>
      <img src={spiderImg} />
      <h1>Hi All...!</h1>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
