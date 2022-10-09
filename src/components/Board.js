import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { sentences } from "../data/sentences";
import CopmaringStrings from "./CopmaringStrings";
import { harderSentences } from "../data/HarderSentences";

const StyledDiv = styled.div`
  position: relative;
`;

const StyledBottomInput = styled.textarea`
  padding: 2px;
  width: 22em;
  height: 19em;
  background-color: ${({ started }) => (started ? "#071a0ce3" : "#5e595936")};
  /* color: ${({ started }) => (!started ? "yellow" : "#ffff0059")}; */
  color: #ffff0059;
  font-size: xx-large;
  z-index: 9;
  overflow-wrap: break-word;
  word-break: break-all;
  font-family: monospace;
  white-space: break-spaces;
`;
const StyledInput = styled.div`
  padding: 2px;
  width: 22em;
  height: 19em;
  display: inline-block;
  background-color: ${({ started }) => (started ? "#071a0ce3" : "#5e595936")};
  position: absolute;
  color: #faff00db;
  font-size: xx-large;
  overflow-wrap: break-word;
  word-break: break-all;
  font-family: monospace;
  white-space: break-spaces;
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
  setCount,
  lvl,
}) => {
  const { mistakes } = CopmaringStrings(text, number, lvl);
  const specialKeys = [
    "Shift",
    "Alt",
    "Control",
    "Tab",
    "Backspace",
    "Escape",
    "Delete",
    "Insert",
    "AltGraph",
    "CapsLock",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
  ];
  const Level = lvl ? sentences : harderSentences;
  useEffect(() => {
    if (text.length === Level[number].length) {
      setFinished(true);
      setStarted(false);
    }
  }, [text]);

  const input = useRef();
  const isActive = input.current === document.activeElement;

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setStarted(!started);
      if (started === false) {
        console.log(started);
        setText("");
        setCount(0);
        setNumber(Math.floor(Math.random() * Level.length));
        setFinished(false);
        document.getElementById("textField").focus();
      }
    }
  };

  // useEffect(() => {
  //   document.addEventListener("keydown", keyDownHandler);
  //   return () => document.removeEventListener("keydown", keyDownHandler);
  // });
  window.addEventListener("keydown", function (e) {
    if (e.key === " " || e.key === "Tab") {
      e.preventDefault();
    }
  });

  return (
    <StyledDiv>
      <StyledInput
        ref={input}
        id="textField"
        tabIndex={0}
        onKeyDown={({ key, preventDefault, target, which }) => {
          setStarted(true);
          if (key === "Enter") {
            keyDownHandler({ key, preventDefault });
            return;
          }
          if (key === "Backspace") {
            setText((text) => text.slice(0, text.length - 1));
          }
          if (specialKeys.includes(key) || finished) return;

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
        {isActive && "_"}
      </StyledInput>
      {/* <StyledInput
        id="textField"
        type="text"
        value={text}
        started={started}
        disabled={false}
        onChange={(e) => (setText(e.target.value), setStarted(true))}
      /> */}
      <StyledBottomInput
        readOnly
        value={lvl ? sentences[number] : harderSentences[number]}
        started={started}
      />
    </StyledDiv>
  );
};

export default Board;
