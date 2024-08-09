import styled from "styled-components";
import { Theme } from "../../../../theme";

export const Wrap = styled.div`
    width: 100%;
    height: 86%;
    position: fixed;
    bottom: 0px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 1rem;
    border-radius: 20px 20px 0 0;
    background-color: ${Theme.colors.blue600};
    box-shadow: ${Theme.shadow.sh200};
    z-index: 1;
`;

export const NameMenu = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    text-align: center;
    padding: 0.4rem ;
    & span {
        font-size: 12px;
        color: ${Theme.colors.blue600};
    }
`;

export const NavItem = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: .4rem;
`;
