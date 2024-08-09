import styled from "styled-components";
import { Theme } from "../../theme";

export const Content = styled.div`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    max-height: 500px;
    padding: 0 0 1rem 0;
    overflow: scroll;
    
`;
export const Table = styled.table`
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    border-collapse: collapse;
`;
export const TableHeader = styled.thead`
    /* border: 1px solid red; */
    width: 100%;
    height: 30px;
    background-color: transparent;
`;
export const TableHeaderCell = styled.th`
    padding: 8px 12px;
    font-size: .8em;
    font-weight: 500;
    color: ${Theme.colors.grey800};
    text-align: left;
    border-bottom: 1px solid ${Theme.colors.grey500};
    ${({colSpan}) => colSpan && `
        column-span: ${colSpan};
    `}
`;

export const TableBody = styled.tbody`
height: 100%;
    overflow: scroll;
`;

export const TableRow = styled.tr`
height: 100%;
    &:nth-child(even) {
        background-color: transparent;
    }
`;

export const TableCell = styled.td`
height: 100%;
    padding: 8px 12px;
    border-bottom: 1px solid ${Theme.colors.grey400};
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
export const WrapTableCell = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;
export const WrapButton = styled.div`
    border: 1px solid red;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const WrapButtons = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;
`;


