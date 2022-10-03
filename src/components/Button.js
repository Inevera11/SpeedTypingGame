import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  color: black;
  background-color: rgb(20, 216, 20);
  padding: 2vh;
  border-radius: 1vh;
  box-shadow: inset -1px -1px 3px 3px #0c4804, 0px 0px 8px 0px #33e91a;
`;

const Button = ({ started, setStarted, setCount }) => {
  return (
    <ButtonStyled
      onClick={() => {
        setStarted(!started);
        if (!started) setCount(0);
      }}
    >
      {started ? "END" : "START"}
    </ButtonStyled>
  );
};

export default Button;
