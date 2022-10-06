import React from "react";
import styled from "styled-components";
import { sentences } from "../data/sentences";
import { harderSentences } from "../data/HarderSentences";

const ButtonStyled = styled.button`
  font-size: large;
  font-weight: bolder;
  font-family: monospace;
  width: 7rem;
  color: #292c27e3;
  background-color: rgb(20, 216, 20);
  padding: 2vh;
  border-radius: 1vh;
  margin: auto 2vh;
  box-shadow: inset -1px -1px 3px 3px #0c4804, 0px 0px 8px 0px #33e91a;
`;

const Buttons = ({
  lvl,
  setLvl,
  started,
  setStarted,
  setCount,
  setText,
  setNumber,
  setFinished,
  finished,
}) => {
  const Lenhth = lvl ? sentences.length : harderSentences.length;

  return (
    <ButtonStyled
      onClick={() => {
        setStarted(!started);
        if (!started) {
          setFinished(false);
          setCount(0);
          setNumber(Math.floor(Math.random() * Lenhth));
          setText("");
          document.getElementById("textField").focus();
        }
      }}
    >
      {started && finished === false ? "STOP" : "START"}
    </ButtonStyled>
  );
};

export default Buttons;
