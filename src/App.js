import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
import React, { useState } from "react";
import styled from "styled-components";
import { sentences } from "./data/sentences";
import { harderSentences } from "./data/HarderSentences";

const StyledSite = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-around;
  align-items: center;
`;

function App() {
  const [lvl, setLvl] = useState(true);
  const Lenhth = lvl ? sentences.length : harderSentences.length;
  const changeNumber = () => {
    return Math.floor(Math.random() * Lenhth);
  };
  const [started, setStarted] = useState(false);
  const [text, setText] = useState("");
  const [number, setNumber] = useState(changeNumber());
  const [finished, setFinished] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <StyledSite>
      <Header />
      <Board
        started={started}
        setStarted={setStarted}
        text={text}
        setText={setText}
        number={number}
        setNumber={setNumber}
        finished={finished}
        setFinished={setFinished}
        setCount={setCount}
        lvl={lvl}
      />
      <Footer
        started={started}
        setStarted={setStarted}
        setText={setText}
        text={text}
        number={number}
        setNumber={setNumber}
        finished={finished}
        setFinished={setFinished}
        count={count}
        setCount={setCount}
        lvl={lvl}
        setLvl={setLvl}
      />
    </StyledSite>
  );
}

export default App;
