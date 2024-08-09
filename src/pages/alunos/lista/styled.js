import styled from "styled-components";
import { Theme } from "../../../theme";


export const Content = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    max-height: 500px;  
`;

export const TableHeader = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: 30px;
    background-color: transparent;
`;
export const TableHeaderCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex: ${({$flex}) => $flex ? $flex : 1};    
    padding: 8px 12px;
    border-bottom: 1px solid ${Theme.colors.grey400};
    & span {
        font-style: normal;
        font-weight: 800;
        font-size: 12.8px;
        line-height: 13px;
        text-align: left;
        text-transform: uppercase;
        color: ${Theme.colors.grey700};
    }
`;

export const TableBody = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    height: calc(100% - 30px);
    padding-bottom: 1rem;
    overflow-y: auto;
`;

export const TableRow = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${Theme.colors.grey600};
    &:nth-child(even) {
        background-color: transparent;
    }
`;

export const TableCell = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;
    flex: ${({$flex}) => $flex ? $flex : 1};    
    padding: .6rem 10px;
    & span {
        font-weight: 700;
        font-size: 12.8px;
        line-height: 13px;
        color: ${Theme.colors.grey300};
    }
    @media (max-width: 768px) {
        /* border: none; */
    }
`;

export const CircleLetterName = styled.div`

    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${Theme.colors.blue100};
    border-radius: 20px;
    font-weight: 900;
    font-size: 21.1px;
    line-height: 25px;
    text-transform: uppercase;
    color: ${Theme.colors.blue800};
`;

export const WrapButton = styled.div`
    /* border: 1px solid red; */
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .2rem ; 
`;





