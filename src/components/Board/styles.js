import styled from 'styled-components';

export const StyledDiv = styled.div`
    position: relative;
    padding: 2px;
    width: 70vw;
    height: 50vh;
    box-sizing: border-box;
`;

export const StyledBottomInput = styled.textarea`
    box-sizing: border-box;
    display: inline-block;
    padding: 2px;
    width: 70vw;
    height: 50vh;
    background-color: ${({ started }) => (started ? '#071a0ce3' : '#5e595936')};
    color: #ffff0059;
    font-size: xx-large;
    z-index: 9;
    overflow-wrap: anywhere;
    word-break: break-all;
    font-family: monospace;
    white-space: break-spaces;
`;
export const StyledInput = styled.div`
    box-sizing: border-box;
    padding: 2px;
    width: 70vw;
    height: 50vh;
    display: inline-block;
    background-color: ${({ started }) => (started ? '#071a0ce3' : '#5e595936')};
    position: absolute;
    color: #faff00db;
    font-size: xx-large;
    overflow-wrap: anywhere;
    word-break: break-all;
    font-family: monospace;
    white-space: break-spaces;
`;
