import { ConsoleIcon } from "evergreen-ui";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { sentences } from "../data/sentences";
import CopmaringStrings from "./CopmaringStrings";

const StyledDiv = styled.div`
  position: relative;
`;

const StyledBottomInput = styled.textarea`
  width: 40vw;
  height: 50vh;
  background-color: #071a0c00;
  color: ${({ started }) => (!started ? "yellow" : "#ffff0059")};
  font-size: xx-large;
  z-index: 9;
`;
const StyledInput = styled.div`
  padding: 2px;
  width: 40vw;
  height: 50vh;
  background-color: ${({ started }) => (started ? "#071a0ce3" : "#5e595936")};
  position: absolute;
  color: #faff00db;
  font-size: xx-large;
  overflow-wrap: break-word;
  font-family: monospace;
`;

const Board = ({
  started,
  setStarted,
  text,
  setText,
  number,
  setNumber,
  finished,
  setFinished,
}) => {
  const { mistakes } = CopmaringStrings(text, number);

  useEffect(() => {
    if (text.length === sentences[number].length) {
      setStarted(false);
      setFinished(true);
    }
  }, [text]);

  const keyDownHandler = (event) => {
    // console.log("User pressed: ", event.key);
    if (event.key === "Enter") {
      event.preventDefault();
      if (started) {
        setStarted(false);
        setFinished(true);
        console.log({ started });
      } else {
        setText("");
        setStarted(true);
        setNumber(Math.floor(Math.random() * 19));
        console.log({ started });
        setFinished(false);
        document.getElementById("textField").focus();
      }
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);

    return () => document.removeEventListener("keydown", keyDownHandler);
  });
  return (
    <StyledDiv>
      <StyledInput
        id="textField"
        tabIndex={0}
        onKeyDown={({ key, preventDefault }) => {
          setStarted(true);
          if (key === "Enter") {
            keyDownHandler({ key, preventDefault });
            return;
          }
          if (["Shift", "Alt", "Control", "Tab"].includes(key) || finished)
            return;

          setText(`${text}${key}`);
          console.log(key);
        }}
      >
        {text.split("").map((c, index) =>
          mistakes.includes(index) ? (
            <span key={index} style={{ color: "red" }}>
              {c}
            </span>
          ) : (
            c
          )
        )}
      </StyledInput>
      {/* <StyledInput
        id="textField"
        type="text"
        value={text}
        started={started}
        disabled={false}
        onChange={(e) => (setText(e.target.value), setStarted(true))}
      /> */}
      <StyledBottomInput readOnly value={sentences[number]} started={started} />
    </StyledDiv>
  );
};

export default Board;
