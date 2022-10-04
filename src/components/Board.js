import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sentence from "./Sentence";

const StyledDiv = styled.div`
  position: relative;
`;

const StyledBottomInput = styled.textarea`
  width: 40vw;
  height: 50vh;
  background-color: #071a0c00;
  color: ${({ started }) => (started ? "yellow" : "#ffff0059")};
  font-size: xx-large;
  z-index: 9;
`;
const StyledInput = styled.textarea`
  width: 40vw;
  height: 50vh;
  background-color: ${({ started }) => (started ? "#071a0ce3" : "#5e595936")};
  position: absolute;
  color: #faff00db;
  font-size: xx-large;
`;

const Board = ({ started, setStarted, text, setText, number }) => {
  useEffect(() => {
    if (text.length === Sentence(number).length) {
      setStarted(false);
      document.getElementById("textField").disabled = true;
    }
  }, [text]);
  return (
    <StyledDiv>
      <StyledInput
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            e.preventDefault();
            started ? setStarted(false) : setStarted(true);
            console.log("enter");
          }
        }}
        id="textField"
        type="text"
        value={text}
        started={started}
        disabled={false}
        onChange={(e) => (setText(e.target.value), setStarted(true))}
      />
      <StyledBottomInput readOnly value={Sentence(number)} started={started} />
    </StyledDiv>
  );
};

export default Board;
