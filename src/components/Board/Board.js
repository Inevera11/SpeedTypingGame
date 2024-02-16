import React, { useEffect, useRef } from 'react';
import { StyledDiv, StyledBottomInput, StyledInput } from './styles';
import { ComparingStrings } from '../../helpers/ComparingStrings';

const Board = ({ markAsFinished, started, setStarted, text, setText, number, finished, lvl, prepStart }) => {
    const { mistakes, isFinished, currText } = ComparingStrings(text, number, lvl);
    const specialKeys = ['Shift', 'Alt', 'Control', 'Tab', 'Backspace', 'Escape', 'Delete', 'Insert', 'AltGraph', 'CapsLock', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp'];

    useEffect(() => {
        if (isFinished) {
            markAsFinished();
        }
    }, [text]);

    const input = useRef();
    const isActive = input.current === document.activeElement;

    const keyDownHandler = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setStarted(!started);
            if (started === false) {
                prepStart();
            }
        }
    };

    window.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Tab') {
            e.preventDefault();
        }
    });

    const onKeyDown = ({ key, preventDefault }) => {
        setStarted(true);
        if (key === 'Enter') {
            keyDownHandler({ key, preventDefault });
            return;
        }
        if (key === 'Backspace') {
            setText((text) => text.slice(0, text.length - 1));
        }
        if (specialKeys.includes(key) || finished) return;

        setText(`${text}${key}`);
    };

    return (
        <StyledDiv>
            <StyledInput ref={input} id="textField" tabIndex={0} onKeyDown={onKeyDown}>
                {text.split('').map((c, index) =>
                    mistakes.includes(index) ? (
                        <span key={index} style={{ color: 'red' }}>
                            {c}
                        </span>
                    ) : (
                        c
                    )
                )}
                {isActive && '_'}
            </StyledInput>
            <StyledBottomInput wrap="off" readOnly value={currText} started={started} />
        </StyledDiv>
    );
};

export default Board;
