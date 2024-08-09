
import styled, { css, keyframes } from "styled-components";
import { Theme } from "../../theme";

const Primary = css`
    background-color: ${Theme.colors.green700} ;
    border-color: ${Theme.colors.green500};
    color: ${Theme.colors.green800};
    & svg {
        color: ${Theme.colors.green800};
    }
    &::before {
        background-color: ${Theme.colors.green800} ;    
    }

`;
const Danger = css`
    background-color: ${Theme.colors.red400};
    border-color: ${Theme.colors.red600};
    color: ${Theme.colors.red500};
    & svg {
        color: ${Theme.colors.red500};
    }
    &::before {
        background-color: ${Theme.colors.red600} ;
    }
`;

const slideRight = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;
const progress = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;

export const AlertCustom = styled.div`
    max-width: 300px;
    max-height: 200px;
    position: absolute;
    top: 10%;
    right: 2%;
    display: flex;
    gap: 1rem;
    padding: 2rem .8rem 1rem .8rem;
    border: 1px solid;
    border-radius: 8px;
    font-size: .8em;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: .7px;  
    animation: ${slideRight} 0.5s ease-in-out both; 
    z-index: 100;
    &::before {
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 20px;
        animation:  ${progress} 5s linear forwards;
    }
    ${({$variant}) => {
        switch ($variant) {
            case 'primary':
                return Primary;
            case 'secondary':
                return Danger;
            case 'danger':
                return Danger;
            case 'warning':
                return Danger;
            case 'info':
                return Danger;
            case 'light':
                return Danger;
            case 'dark':
                return Danger;
            default:
                return Primary;
        }
    }}
`;

export const Closse = styled.button`
    & svg {
        position: absolute;
        top: 4px;
        right: 10px;
        font-size: 1.2rem;
        cursor: pointer;
    }
`;