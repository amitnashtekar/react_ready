import React from "react";
import styled, { css } from "styled-components";

const bgstyle = ({ type = "primary" }) => {
  if (type === "primary") {
    return css`
      background: blue;
    `;
  }
  if (type === "success") {
    return css`
      background: green;
    `;
  }
  if (type === "danger") {
    return css`
      background: red;
    `;
  }
};
const StyledButton = styled.button`
  ${(p) =>
    p.large
      ? css`
          padding: 1rem;
          border-radius: 1rem;
        `
      : css`
          padding: 0.5rem;
          border-radius: 0.5rem;
        `};
  ${bgstyle}
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export { Button };
