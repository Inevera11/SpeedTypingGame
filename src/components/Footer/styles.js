import styled from 'styled-components';

export const StyledFooter = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: space-around;
    align-items: center;
    flex: 0 1 auto;
`;
export const ButtonStyled = styled.button`
    font-size: large;
    font-weight: bolder;
    font-family: monospace;
    text-shadow: 0px 0px 0px #ebff00;
    margin-left: 10px;
    padding: 15px;
    color: white;
    background-color: ${({ lvl }) => (lvl ? '#dda236f0' : 'red')};
    border-radius: 12px;
    box-shadow: ${({ lvl }) => (lvl ? 'inset 0 0 4px 3px #583707, 0 0 12px 0px #d5ad1abd' : 'inset 0 0 4px 3px #ff936ebd, 0 0 12px 0px #d54e1abd')};
`;
