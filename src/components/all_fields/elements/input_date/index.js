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
        fontSize:      '24px', 
        letterSpacing: '0.1px', 
        fontWeight:    '500', 
        lineHeight:    '20px',
    },
    n: {
        height:        '36px',
        fontSize:      '16px', 
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

const InputDate = styled.input`
    width: 100%;
    padding-left: 16px; 
    background-color: transparent; 
    color: transparent; 
    border: 1px solid ${Theme.colors.grey600};
    border-radius: 8px;
    outline: none;
    transition:  outline 0.9s, border-color 0.3s;
    ${({ $level }) => {
        const { height, fontSize, letterSpacing, fontWeight, lineHeight } = inputSizes[$level] || inputSizes.n; // Default to 'm' if level is not provided
        return `
            height: ${height};
            font-size: 14px;
            font-weight: ${fontWeight};
            letter-spacing: ${letterSpacing};
            line-height: 12px;
        `;
    }}

    ${({$isFocused}) => $isFocused ? `
            border-color: ${Theme.colors.green800};
            color: ${Theme.colors.grey800};
        ` : null
    };
    &:focus {
        border-color: ${Theme.colors.green800};
        outline: 1px solid ${Theme.colors.green800}; 
        color: ${Theme.colors.grey800};
    }

`;

export default InputDate;