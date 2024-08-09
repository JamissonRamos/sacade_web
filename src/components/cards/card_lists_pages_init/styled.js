import styled from "styled-components";
import { Theme } from "../../../theme";

export const Container = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 16px 0;
    overflow-y: auto;
`;
export const Card = styled.div`
    /* border: 1px solid red; */
    width: 200px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    background: ${Theme.colors.white800};
    box-shadow: ${Theme.shadow.sh800};
`;
export const Header = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    /* flex-grow: 1; */
    padding: 2px 0;
`;
export const Name = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    padding: .4rem 0;
    text-align: center;
    & span {
        font-weight: 700;
        font-size: 1em;
        line-height: 13px;
        color: ${Theme.colors.grey300};
    }
`;
export const Body = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .4rem 0;
`;

export const Footer = styled.div`
    /* border: 1px solid red;    */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 16px;

`;
export const WrapButton = styled.div`
    /* border: 1px solid red; */
    width: 60px;
    height: 60px;
    padding: .1rem;
`;

