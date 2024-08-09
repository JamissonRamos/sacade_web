import styled, { css } from "styled-components";
import { Theme } from "../../theme";


const Primary = css`
    background-color: ${Theme.colors.green500};
    border-color: ${Theme.colors.green800};
    & span {
        color: ${Theme.colors.green600};
    }
`;

const Danger = css`
    background-color: ${Theme.colors.red400};
    border-color: ${Theme.colors.red600};
    & span { 
        color: ${Theme.colors.red500};
    }
`;

export const BadgeCustom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    border-radius: 0.25rem;
    
    & span {
        padding: 4px 8px;
        font-size: 0.60em;
        font-weight: 500;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        vertical-align: baseline;
        text-transform: uppercase;
        /* color: transparent; */
    }
    ${({ type }) => {
        switch (type) {
            case 'primary':
                return Primary;
            case 'danger':
                return Danger;
            default:
                return Primary;
        }
    }}

    
`;


