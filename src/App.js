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
  return (
    <StyledSite>
      <Header />
      <Board started={started} setStarted={setStarted} />
      <Footer started={started} setStarted={setStarted} />
    </StyledSite>
  );
}

export default App;
