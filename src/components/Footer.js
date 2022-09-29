import React from "react";
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

const Footer = ({ timeRemaining }) => {
  return (
    <StyledFooter>
      <h1>Time remaining: {timeRemaining}</h1>
      <Button />
    </StyledFooter>
  );
};

export default Footer;
