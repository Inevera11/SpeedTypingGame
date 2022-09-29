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
  const [seconds, setSeconds] = useState(0);
  return (
    <StyledSite>
      <Header />
      <Board />
      <Footer timeRemaining={seconds} />
    </StyledSite>
  );
}

export default App;
