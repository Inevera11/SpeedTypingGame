import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
import React, { useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  return (
    <div>
      <Header />
      <Board />
      <Footer timeRemaining={seconds} />
    </div>
  );
}

export default App;
