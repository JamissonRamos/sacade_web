import styled from "styled-components";
import { Theme } from "../../../theme";

export const Main = styled.main`
    /* border: 1px solid red; */
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 120px;
    background-color: ${Theme.colors.white800}; 
    transition: padding 0.4s;    
    @media (max-width: 1024px) {
        /* border: 1px solid blue; */
        padding: 0 60px;
    }
    @media (max-width: 768px) {
        /* border: 1px solid blue; */
        padding: 0;
    }
`;

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    max-height: 880px;
    display: flex;
    align-items: center;
    justify-content: center;   
    padding: 1rem; 
    transition: padding 0.4s; 
    @media (max-width: 768px) {
        padding: 0;
    }
`;

export const Panel = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    border-radius: 18px;
    box-shadow: ${Theme.shadow.sh800};
    transition: border-radius 0.4s; 
    @media (max-width: 768px) {
        height: 100%;
        position: relative;
        flex-direction: column;
        justify-content: start;
        border-radius: 0px;
        box-shadow: none;
    }
`;

export const PanelLeft = styled.div`
    /* border: 1px solid red; */
    flex: 1.4;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center; 
    padding: 0.8rem ;
    background: ${Theme.colors.green800};
    @media (max-width: 768px) {
        // border: 1px solid blue;
        height: 38%;
        flex: none;
        justify-content: start; 
        border-radius: 0px 0px 140px 140px;
        box-shadow: ${Theme.shadow.sh700};        
    }
    @media (max-width: 425px) {
        border: 1px solid blue;
        height: 28%;
        gap: .4rem;
        padding: 0;
        border-radius: 0px 0px 40px 40px;
    }
`;

export const ContentLeftHeader = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    flex: 1.4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    & p{
            text-align: center;
        }
    @media (max-width: 768px) {
        /* border: 1px solid orange; */
        height: 24%;
        flex: none;
        justify-content: start;
        gap: 0;
        padding: 0;
        & p{
            display: none
        }
    }
    
`;

export const ContentBody = styled.div`
    /* border: 1px solid red; */
    width: 100%;  
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 768px) {
        display: none;
    }
`;
export const WrappedImg = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center; 
`;
export const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;

export const WrappedButtonGoogleText = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 8px;
    text-align: center;
`;

export const ContentFooter = styled.div`
    /* border: 1px solid red;   */
    width: 100%;
    flex: .4;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        height: 10%;
        flex: none;
    }
`;

export const PanelRight = styled.div`
    
    /* border: 1px solid Yellow;    */
    flex: 1;
    padding: 0.8rem ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    background: ${Theme.colors.white800};
    border-radius: 0px 18px 18px 0px;
    box-shadow: ${Theme.shadow.sh700}; 
    transition: width 0.4s, padding 0.4s, top 0.4s; 

    @media (max-width: 768px) {
        // border: 1px solid blue;
        width: 60%;
        height: 78%;
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 18px;
        overflow: visible; 
    }
    @media (max-width: 425px) {
        // border: 1px solid blue;
        width: 90%;
        height: 80%; 
        top: 16%;
    }
`;