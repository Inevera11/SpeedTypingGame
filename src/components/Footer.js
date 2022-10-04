import React, { useState, useEffect } from "react";
import Buttons from "./Buttons";
import styled from "styled-components";
import CopmaringStrings from "./CopmaringStrings";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-around;
  align-items: center;
`;

const Footer = ({
  started,
  setStarted,
  setText,
  text,
  number,
  setNumber,
  finished,
  setFinished,
}) => {
  const [count, setCount] = useState(0);
  const { mistakesLength, charactersLeft, correctOnes } = CopmaringStrings(
    text,
    number
  );
  useEffect(() => {
    if (started) {
      const counter = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      return () => {
        clearInterval(counter);
      };
    }
  }, [started]);

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
      </h2>
      {correctOnes && <h3>Correctness: {correctOnes}%</h3>}
      <Buttons
        started={started}
        setStarted={setStarted}
        setCount={setCount}
        setText={setText}
        setNumber={setNumber}
        finished={finished}
        setFinished={setFinished}
      />
    </StyledFooter>
  );
};

export default Footer;
