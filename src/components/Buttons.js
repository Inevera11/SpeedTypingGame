import React from "react";
import styled from "styled-components";

const ButtonsStyled = styled.div`
  display: flex;
`;

const ButtonStyled = styled.button`
  color: black;
  background-color: rgb(20, 216, 20);
  padding: 2vh;
  border-radius: 1vh;
  margin: auto 2vh;
  box-shadow: inset -1px -1px 3px 3px #0c4804, 0px 0px 8px 0px #33e91a;
`;

const Buttons = ({ started, setStarted, setCount, setText, setNumber }) => {
  return (
    <ButtonsStyled>
      <ButtonStyled
        onClick={() => {
          setStarted(!started);
          if (!started) {
            document.getElementById("textField").disabled = false;
            setCount(0);
            setNumber(Math.floor(Math.random() * 19));
            setText("");
            const input = document.getElementById("textField");
            input.focus();
          }
        }}
      >
        {started ? "STOP" : "START"}
      </ButtonStyled>
    </ButtonsStyled>
  );
};

export default Buttons;
