import styled, { css } from 'styled-components';
import { Theme } from '../../../theme';


const containerStyles = css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;    
    cursor: pointer;
    border-radius: 100px;
    transition: background-color 0.3s ease, color 0.4s;
    & :hover {
        font-size: 28px;
    }
`;

const containedStyles = css`
    background-color: ${(props) => props.color};
    border: none;
    color: ${Theme.colors.white800};
    & svg {
        color: ${Theme.colors.white800};
    }
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

    svg{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        transition: 350ms;
    }
    
`;