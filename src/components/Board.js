import React, { useState } from "react";
import styled from "styled-components";
import Sentence from "./Sentence";
import CopmaringStrings from "./CopmaringStrings";

const StyledDiv = styled.div`
  position: relative;
`;

const StyledBottomInput = styled.textarea`
  width: 40vw;
  height: 50vh;
  background-color: #071a0c00;
  color: yellow;
  font-size: xx-large;
  z-index: 9;
`;
const StyledInput = styled.textarea`
  width: 40vw;
  height: 50vh;
  background-color: #071a0ce3;
  position: absolute;
  color: ${({ LetterColor }) => (LetterColor ? "#faff00db" : "#cd1313e3")};
  font-size: xx-large;
`;

const Board = ({ started, setStarted }) => {
  const [text, setText] = useState("");
  console.log(`text${text}`);
  const LetterColor = CopmaringStrings(Sentence(), text);

  return (
    <StyledDiv>
      <StyledInput
        type="text"
        // value={text}
        LetterColor={LetterColor}
        onChange={(e) => (setText(e.target.value), setStarted(true))}
      />
      <StyledBottomInput readOnly value={Sentence()} />
    </StyledDiv>
  );
};

export default Board;
