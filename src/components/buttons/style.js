import styled, { css } from 'styled-components';
import { Theme } from '../../theme';


const containerStyles = css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 4px 16px;
    border-radius: 8px;
    font-size: .8rem;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.4s;
`;

const containedStyles = css`
    background-color: ${(props) => props.color};
    border: none;
    color: ${Theme.colors.white800};

    &:hover {
        background-color: ${props => {
            const color = props.color;
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            return `rgb(${r - 35}, ${g - 35}, ${b - 35})`;
        }};
    }
`;

const outlineStyles = css`
    background-color: transparent;
    border: 2px solid ${(props) => props.color } ;
    color: ${(props) => props.color };
    &:hover {
        color: ${Theme.colors.white800};
        background-color: ${props => {
            const color = props.color;
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            return `rgb(${r - 2}, ${g - 2}, ${b - 2})`;
        }};
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

    svg{
        font-size: .8em;
    }
    
`;