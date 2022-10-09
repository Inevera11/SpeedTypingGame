import React, { useEffect } from "react";
import StartButton from "./StartButton";
import styled from "styled-components";
import CopmaringStrings from "./CopmaringStrings";
import { sentences } from "../data/sentences";
import { harderSentences } from "../data/HarderSentences";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-around;
  align-items: center;
`;
const ButtonStyled = styled.button`
  font-size: large;
  font-weight: bolder;
  font-family: monospace;
  text-shadow: 0px 0px 0px #ebff00;
  padding: 1rem;
  color: white;
  background-color: ${({ lvl }) => (lvl ? "#dda236f0" : "red")};
  border-radius: 12px;
  box-shadow: ${({ lvl }) =>
    lvl
      ? "inset 0 0 4px 3px #583707, 0 0 12px 0px #d5ad1abd"
      : "inset 0 0 4px 3px #ff936ebd, 0 0 12px 0px #d54e1abd"};
`;

const Footer = ({
  lvl,
  setLvl,
  started,
  setStarted,
  setText,
  text,
  number,
  setNumber,
  finished,
  setFinished,
  count,
  setCount,
}) => {
  const { mistakesLength, charactersLeft, correctOnes } = CopmaringStrings(
    text,
    number,
    lvl
  );
  useEffect(() => {
    document.getElementById("textField").focus();
    if (started && finished === false) {
      const counter = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      return () => {
        clearInterval(counter);
      };
    }
  }, [started]);

  const Lenhth = lvl ? sentences.length : harderSentences.length;

  return (
    <StyledFooter>
      <h1>Timer: {count}s</h1>
      <h2 style={{ display: "flex" }}>
        <div style={{ color: "#90dd4cde", margin: "auto 2vw" }}>
          Mistakes: {mistakesLength}
        </div>
        <div style={{ color: "#ddc82ede", margin: "auto 2vw" }}>
          Characters left: {charactersLeft}
        </div>
        <div
          style={{ color: "#eb8383eb", margin: "auto 2vw", display: "flex" }}
        >
          Level:&nbsp;
          <ButtonStyled
            lvl={lvl}
            onClick={() => {
              setLvl(!lvl);
              setNumber(Math.floor(Math.random() * Lenhth));
              setText("");
              setStarted(false);
              setCount(0);
              document.getElementById("textField").focus();
            }}
          >
            {lvl ? 1 : 2}
          </ButtonStyled>
        </div>
      </h2>
      <h3>Correctness:{correctOnes !== null ? correctOnes : "?"}%</h3>
      <StartButton
        started={started}
        setStarted={setStarted}
        setCount={setCount}
        setText={setText}
        setNumber={setNumber}
        finished={finished}
        setFinished={setFinished}
        lvl={lvl}
      />
    </StyledFooter>
  );
};

export default Footer;
