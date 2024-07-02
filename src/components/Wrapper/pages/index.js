import styled from "styled-components";
import { Theme } from "../../../theme";

export const WarapperMainPage = styled.div `
    /* border: 1px solid blue; */
    width: 100%; 
    height: 86%;

    padding: .4rem ;
    margin: 24px 0;
    border-radius: 8px;
    overflow-y: auto;
    box-shadow: ${Theme.shadow.sh800};
    
    @media (max-width: 768px) {
            /* margin-left: 72px ; */
        }
    
    @media (max-width: 425px) {
        padding: .8rem ;
        margin: 0;
        box-shadow: none;
    }
    
`;