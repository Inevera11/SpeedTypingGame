import React from "react";
import styled from "styled-components";

const StyledInput = styled.textarea`
  width: 40vw;
  height: 50vh;
  background-color: #071a0ce3;
  color: yellow;
  font-size: xx-large;
`;

const Board = () => {
  return (
    <div>
      <StyledInput />
    </div>
  );
};

export default Board;
