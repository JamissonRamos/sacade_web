import styled from "styled-components";
import { Theme } from "../../../theme";

export const WrapButton = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem; 
`;

export const MsgBoxErro = styled.div`

    width: 100%;
    padding: .4rem .2rem;
    background-color: ${Theme.colors.red800};
    color: ${Theme.colors.white800};
    font-size: .8rem;
    text-align: center;
    border-radius: 4px;


`
export const WrapSpinner = styled.div`
    width: 10%;    
    height: 10%;
    /* border: 1px solid red; */
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 60%;
    left: 65%;




`
