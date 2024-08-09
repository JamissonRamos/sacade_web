import styled from "styled-components";
import { Link } from "react-router-dom";
import { Theme } from "../../../../theme";

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
    &:hover {
        border-radius: 10%;
        background-color: #632ce426;
        box-shadow: ${Theme.shadow.sh800};
    }
`;

export const MenuIcon = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 350ms;
    & svg {
        font-size: ${({$circule}) => $circule? '28px':' 18px'};
        color: ${Theme.colors.grey500};
        transition: 350ms;
        &:hover {
            font-size: ${({$circule}) => $circule? '36px':' 18px'};
        }
    }
`;
export const Label = styled.label`
    font-size: .7em;
    font-weight: 300;
    color: ${Theme.colors.grey500};
`;