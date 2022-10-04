import React, { useEffect } from "react";
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

const Board = ({ started, setStarted, text, setText, number, setNumber }) => {
  useEffect(() => {
    if (text.length === Sentence(number).length) {
      setStarted(false);
      document.getElementById("textField").disabled = true;
    }
  }, [text]);

  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log("User pressed: ", event.key);
      if (event.key === "Enter") {
        event.preventDefault();
        if (started) {
          setStarted(false);
          document.getElementById("textField").disabled = true;
          console.log({ started });
        } else {
          setText("");
          setStarted(true);
          setNumber(Math.floor(Math.random() * 19));
          console.log({ started });
          document.getElementById("textField").disabled = false;
          document.getElementById("textField").focus();
        }
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });
  return (
    <StyledDiv>
      <StyledInput
        onKeyPress={(e) => {
          if (e.charCode === 13) {
            e.preventDefault();
            started ? setStarted(false) : setStarted(true);
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
