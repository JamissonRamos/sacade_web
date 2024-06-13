import styled from "styled-components";
import { Theme } from "../../../theme";

export const Main = styled.main`
    border: 1px solid red;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 120px;
    background-color: ${Theme.colors.white800}; 
    transition: padding 0.4s;    
    @media (max-width: 1024px) {
        border: 1px solid blue;
        padding: 0 60px;
    }
    @media (max-width: 768px) {
        border: 1px solid blue;
        padding: 0 ;
    }
`;

export const Container = styled.div`
    border: 1px solid red;

    width: 100%;
    height: 100%;
    max-height: 880px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: padding 0.4s; 
    @media (max-width: 768px) {
        /* border: 1px solid blue; */
        position: relative;
        flex-direction: column;
        justify-content: start;
        transition:  flex-direction 0.9s ; 
    }
    
`;