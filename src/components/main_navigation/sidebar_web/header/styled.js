import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Header = styled.div`
    max-height: 4.6rem;
    flex: 1;
    border-bottom: 1px solid ${({color}) => color};
    @media (max-width: 768px) {
        max-height: 4.2rem;
    }
`;

export const Brand = styled.div`
    /* border: 1px solid blue; */
    height: 100%;
    display: flex;
    flex: 1;
    gap: 8px;
    padding: 0 0 0 24px;
    transition: height 0.4s, padding 0.4s; 
    @media (max-width: 768px) {
        padding: 0;
        max-height: 4.2rem;
    }
`;
export const ImgWrap = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    & img {
        width: 100%;
        height: 100%;
        object-fit: scale-down;
    }
`;
export const TextBrand = styled.div`
    /* border: 1px solid blue; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    & ::before, ::after {
        content: "";
        width: 40%;
        height: 4px;
        position: absolute;
        top: 76%;
        margin: 0 1rem;
    }
    & ::after {
        left: 0;
        background-color: ${Theme.colors.red800};
    }
    & ::before {
        right: 0;
        background-color: ${Theme.colors.blue700};
    }

    @media (max-width: 768px) {
        display: ${({$showSidebar}) => !$showSidebar ? 'flex' : 'none'};
    }
    
`;

