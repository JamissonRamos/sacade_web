import { Link } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "../../../../theme";

export const WrapNav = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: .2rem ;
    background-color: ${({subnav}) => subnav ? Theme.colors.blue300 : null  };
`;

export const ItemMenu = styled(Link)`
    /* border: 1px solid red; */
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    transition: 350ms;
    cursor: pointer;
    &:hover {
        border-left: 4px solid ${Theme.colors.blue400} ;
        background-color: ${Theme.colors.blue500}; 
    }
`;

export const WrapItensMenu = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    gap: 8px;
`;

export const IconMenu = styled.div`
    /* border: 1px solid red; */
    width: 18px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: ${({showSidebar}) => showSidebar ? "0" : "0.8rem"}; 
    transition: width 0.9s, font-size 0.4s; 
    & SVG {
        width: 100%;
        height: 100%;
        font-size: 1.2em;
        color: ${Theme.colors.grey500}
    }
`;

export const LabelMenu = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    padding: 0 .2rem;
    font-size: .8em;
    color: ${Theme.colors.grey500};
    transition: display 0.4s; 
    @media (max-width: 768px) {
        display: ${({showSidebar}) => showSidebar ? "none" : "flex"}
    }
`;

export const ArrowShowSubNav = styled.div`
    /* border: 1px solid red; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: .4rem;
    transition: width 0.9s, font-size 0.4s; 
    & SVG {
        font-size: 1em;
        color: ${Theme.colors.grey500}
    }
`;

export const SubMenu = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: .2rem;
`;

export const DropdownLink = styled(Link)`
    /* border: 1px solid red; */
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: start;
    
    border-radius: 8px;
    transition: 350ms;
    cursor: pointer;
    &:hover {
        border-left: 4px solid ${Theme.colors.blue400};
        background-color: ${Theme.colors.blue500};
    }
    @media (max-width: 768px) {
        justify-content: start;
        
    }
`;

