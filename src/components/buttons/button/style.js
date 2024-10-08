import styled, { css } from 'styled-components';
import { Theme } from '../../../theme';


const containerStyles = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: .8rem;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.4s ease, color 0.4s;
    
`;

const containedStyles = css`
    background-color: ${(props) => props.color};
    border: none;
    color: ${Theme.colors.white800};
    transition: background-color 0.4s ease, color 0.4s;
    & svg {
        color: ${Theme.colors.white800};
    }
    &:hover {
        background-color: ${props => {
            const color = props.color;
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            return `rgb(${r - 85}, ${g - 85}, ${b - 85})`;
        }};
    }
`;


const outlineStyles = css`
    background-color: transparent;
    border: 2px solid ${(props) => props.color } ;
    color: ${(props) => props.color };
    transition: background-color 0.4s ease, color 0.4s;
    & svg {
        color: ${(props) => props.color };
    }
    &:hover {
        color: ${Theme.colors.white800}; 
        background-color: ${props => {
            const color = props.color;
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            return `rgb(${r - 35}, ${g - 35}, ${b - 35})`;
        }};
        & svg {
            color: ${Theme.colors.white800}; 
        }
    }
`;


export const StyledButton = styled.button`

    ${containerStyles}
    ${(props) => 
        props.$variant === 'contained' ||  props.$variant === 'undefined'
        ? containedStyles
        : props.$variant === 'outline'
        ? outlineStyles
        : null
    }
    
    &:disabled {
        opacity: 0.6;
        background-color: ${Theme.colors.blue100} ; 
        border: ${Theme.colors.blue100} ; 
        color: ${Theme.colors.grey500} ; 
        cursor: not-allowed; 
    }
    svg{
        display: flex;
        font-size: 1em;
    }
    
`;