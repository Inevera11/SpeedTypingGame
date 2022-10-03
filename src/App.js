import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
import React, { useState } from "react";
import styled from "styled-components";

const StyledSite = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-around;
  align-items: center;
`;

function App() {
  const [started, setStarted] = useState(false);
  const [text, setText] = useState("");
  return (
    <StyledSite>
      <Header />
      <Board
        started={started}
        setStarted={setStarted}
        text={text}
        setText={setText}
      />
      <Footer started={started} setStarted={setStarted} setText={setText} />
    </StyledSite>
  );
}

export default App;
