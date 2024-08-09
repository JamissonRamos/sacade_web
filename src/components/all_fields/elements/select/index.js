import styled from "styled-components";
import { Theme } from "../../../../theme";

const inputSizes = {
    l: {
        height:        '48px',
        fontSize:      '24px', 
        letterSpacing: '0.1px', 
        fontWeight:    '500', 
        lineHeight:    '28px',
    },
    m: {
        height:        '40px',
        fontSize:      '16px', 
        letterSpacing: '0.1px', 
        fontWeight:    '500', 
        lineHeight:    '20px',
    },
    n: {
        height:        '36px',
        fontSize:      '14px', 
        letterSpacing: '0.5px', 
        fontWeight:    '500', 
        lineHeight:    '8px',
    }, 
    s: {
        height:        '32px',
        fontSize:      '12px', 
        letterSpacing: '0.5px', 
        fontWeight:    '500', 
        lineHeight:    '8px',
    },
};

const Select = styled.select`
    width: 100%;
    /* max-width: 400px; */
    padding-left: ${({$leadingIcon}) => $leadingIcon ? '32px' : '16px'};
    background-color: transparent; 
    color: ${Theme.colors.grey800};
    border: 1px solid ${Theme.colors.grey600};
    border-radius: 8px;
    outline: none;
    transition:  outline 0.9s, border-color 0.3s;
    ${({ $level }) => {
        const { height, fontSize, letterSpacing, fontWeight, lineHeight } = inputSizes[$level] || inputSizes.n; // Default to 'm' if level is not provided
        return `
            height: ${height};
            font-size: ${ fontSize};
            font-weight: ${fontWeight};
            letter-spacing: ${letterSpacing};
            line-height: ${lineHeight};
        `;
    }}

    ${({$isFocused}) => $isFocused ? `
            border-color: ${Theme.colors.green800};
        ` : null
    };
    &:focus {
        border-color: ${Theme.colors.green800};
        outline: 1px solid ${Theme.colors.green800}; 
    }
    &::placeholder{
        font-size: 0.8em;
        color: ${Theme.colors.grey800};
    }
    

`;

export default Select;