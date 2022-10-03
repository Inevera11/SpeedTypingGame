import React, { useState, useEffect } from "react";
import Button from "./Button";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: space-around;
  align-items: center;
`;

const Footer = ({ started, setStarted, setText }) => {
  const [count, setCount] = useState(0);
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
      <h1>Timer: {count}</h1>
      <Button
        started={started}
        setStarted={setStarted}
        setCount={setCount}
        setText={setText}
      />
    </StyledFooter>
  );
};

export default Footer;
