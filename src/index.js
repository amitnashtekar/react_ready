import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import spiderImg from "./assets/Images/spiderman.png";
import { Button } from "./components";

const StyledDiv = styled.div`
  background: gray;
`;
const App = () => {
  console.log("env varibale", process.env);
  return (
    <>
      <StyledDiv>
        <img src={spiderImg} />
        <h1>Hi All...hot reload!</h1>
        <Button>Normal</Button>
        <Button large type="success">
          Normal
        </Button>
        <Button type="danger">Normal</Button>
      </StyledDiv>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
