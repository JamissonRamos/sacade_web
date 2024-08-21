import styled from "styled-components";
import { Theme } from "../../theme";

export const Content = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    /* height: 20%; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

`;

export const WrapTitleSearch = styled.div`
    /* border: 1px solid blue;  */
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    margin-bottom: .8rem;
    transition: flex-direction 0.4s;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
export const WrapTitle = styled.div`
    /* border: 1px solid red; */
    flex: 1;
    transition: text-align 0.4s;
    @media (max-width: 768px) {
        text-align: start;
    }
    
`;
export const WrapSearch = styled.div`
    /* border: 1px solid orange; */
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;
export const WrapButton = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 36px;
    padding: .1rem 0;
    @media (max-width: 375px) {
        width: 46px;
        height: 46px;
        position: fixed;
        bottom: 16vh;
        right: 6vw;
        padding: .2rem;
        border-radius: 100px;
        
    }
`;
