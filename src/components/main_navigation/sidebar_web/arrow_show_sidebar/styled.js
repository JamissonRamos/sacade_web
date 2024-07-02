import styled from "styled-components";
import { Link } from 'react-router-dom';

export const WrapArrow = styled(Link)`
    /* border: 1px solid yellow; */
    width: 22px;
    height: 22px;
    position: fixed;
    top: 5rem;
    display: none;
    align-items: center;
    justify-content: center;
    background-color: ${({color}) => color};
    box-shadow: ${({$boxShadow}) => $boxShadow} ;
    z-index: 10;
    border-radius: 100px;
    transition: left 0.4s;
    & > svg {
        font-size: .6em;
        color: #FFF;
    }
    @media (max-width: 768px) {
        display: flex;
        left: ${({$showSidebar}) => $showSidebar ? '62px' : '230px'} ;
    }
    
    /*     


  //box-shadow: ${({$boxShadow}) => $boxShadow} ;

    @media (max-width: 425px) {
        display: none;
    } 
        */



`;