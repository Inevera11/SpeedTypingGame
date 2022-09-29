import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  color: black;
  background-color: rgb(20, 216, 20);
`;

const Button = () => {
  return (
    <>
      <ButtonStyled>START</ButtonStyled>
    </>
  );
};

export default Button;
