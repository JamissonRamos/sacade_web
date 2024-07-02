import styled from "styled-components";

export const Header = styled.header`
    /* border: 1px solid red; */
    width: 100vw;
    height: 4.5rem;
    display: flex;
    align-items: center;
    padding: 0 24px;
    margin-left: 240px;
    background-color:${({color})=>color};
    transition: margin 0.4s; 
    @media (max-width: 768px) {
        height: 4.2rem;
        margin-left: 72px ;
    }
    @media (max-width: 425px) {
        height: 4rem;
        justify-content: center;
        margin-left: 0;
    }
`;

export const UserLogged = styled.div`
    /* border: 1px solid red; */
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

