import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled(Link)`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    padding: 0 .4rem  ;
    text-decoration: none;
    /* background-color: ${({$subnav}) => $subnav ? '#632ce426' : '#222834'} ;           //#632ce426; //#632ce426 632ce47b */
    &:hover {
        border-radius: 10%;

        background-color: #632ce426;

        box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
`;

export const MenuIcon = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 350ms;
    & svg {
        /* margin-left: 1rem; */
        font-size: ${({$circule}) => $circule? '28px':' 18px'};
        color: #9FA6BC;
        transition: 350ms;

        &:hover {
            font-size: ${({$circule}) => $circule? '36px':' 18px'};;
        }
    }


`;
export const Label = styled.label`

    font-size: .7em;
    font-weight: 300;
    color: #9FA6BC;
    /* @media (max-width: 768px) {
        display:  ${({ showSidebar }) => showSidebar ? 'none' : 'flex' }; //
    } */
`;