import React, { useEffect } from 'react';
import { StyledFooter, ButtonStyled } from './styles';
import { ComparingStrings } from '../../helpers/ComparingStrings';

const Footer = ({ lvl, started, text, number, finished, count, setCount, onChangeLevel, children }) => {
    const { mistakesLength, charactersLeft, correctOnes } = ComparingStrings(text, number, lvl);
    useEffect(() => {
        document.getElementById('textField').focus();
        if (started && finished === false) {
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
            <h1>Timer: {count}s</h1>
            <h2 style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ color: '#90dd4cde', margin: 'auto 2vw' }}>Mistakes: {mistakesLength}</div>
                <div style={{ color: '#ddc82ede', margin: 'auto 2vw' }}>Characters left: {charactersLeft}</div>
                <div style={{ color: '#eb8383eb', margin: 'auto 2vw', display: 'flex', alignItems: 'center' }}>
                    Level:&nbsp;
                    <ButtonStyled lvl={lvl} onClick={onChangeLevel}>
                        {lvl ? 1 : 2}
                    </ButtonStyled>
                </div>
            </h2>
            <h3>Correctness: {correctOnes !== null ? correctOnes : '?'}%</h3>
            {children}
        </StyledFooter>
    );
};

export default Footer;
