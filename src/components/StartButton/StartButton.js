import React from 'react';
import { ButtonStyled } from './styles';

const StartButton = ({ onStart, label }) => {
    return <ButtonStyled onClick={onStart}>{label}</ButtonStyled>;
};

export default StartButton;
