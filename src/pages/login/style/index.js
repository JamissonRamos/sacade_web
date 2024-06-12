import styled from "styled-components";

export const Main = styled.main`
    /* border: 1px solid red; */
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 120px;
    background-color: #fff; 
    color: red;
    transition: padding 0.4s;    
    @media (max-width: 1440px) {
        border: 1px solid blue;
        padding: 0px;
    }
`