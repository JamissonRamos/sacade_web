import styled from "styled-components";
import { Theme } from "../../../theme";

export const Sidebar = styled.div`
    width: 100vw;
    height: 12vh;
    position: fixed;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    background-color: ${({color}) => color};
    border-radius: 20px 20px 0 0;
    box-shadow: ${Theme.shadow.sh400};
    z-index: 100;
    overflow: visible;
`;
export const Wrap = styled.div`
    /* border: 1px solid red; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1.5rem;
    padding: 0 .8rem;
`;
export const WrapItemCircule = styled.div`
    width: 76px;
    height: 76px;
    position: absolute;
    top: -28px;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${Theme.colors.blue400}; 
    border: 6px solid ${Theme.colors.grey500}; 
    border-radius: 50%;
    transform: translate(-50%);
    z-index: 200;
    box-shadow: ${Theme.shadow.sh300};
    @media (max-width: 375px) {
        width: 66px;
        height: 66px;
    }
`;

export const WrapItem = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;