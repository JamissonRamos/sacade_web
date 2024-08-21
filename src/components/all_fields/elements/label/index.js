import styled from "styled-components";
import { Theme } from "../../../../theme";

const standardSizes = {
    l: {
        top:            '20%',
        fontsize:       '20px', 
        letterSpacing:  '0.1px', 
        fontWeights:     '500', 
        lineHeight:     '28px',
    },
    m: {
        top:            '20%',
        fontsize:       '18px', 
        letterSpacing:  '0.1px', 
        fontWeights:    '500', 
        lineHeight:     '20px',
    },
    n: {
        top:           '20%',
        fontsize:      '16px', 
        letterSpacing: '0.5px', 
        fontWeights:   '500', 
        lineHeight:    '16px',
    }, 
    s: {
        top:           '19%',
        fontsize:      '12px', 
        letterSpacing:  '0.5px', 
        fontWeights:    '500', 
        lineHeight:     '16px',
    },
};


const Label = styled.label`

    /* border: 1px solid red; */
    /* width: 100%; */
    position: absolute;
    top: 50%;
    left: ${({$leadingIcon}) => $leadingIcon ? '24px' : '0px'}; 
    transform: translateY(-18%);
    padding-left: 16px;
    color: ${Theme.colors.grey600};
    transition: top 0.4s, left 0.4s, 0.3s, color 0.3s;   
    ${({ $level }) => {
        const { fontsize, letterSpacing, fontWeights, lineHeight } = standardSizes[$level] || standardSizes.n; // Default to 'm' if level is not provided
        return `
            font-size: ${fontsize};
            letter-spacing: ${letterSpacing};
            font-weight: ${fontWeights};
            line-height: ${lineHeight};
        `;
    }}

    ${({$level, $isFocused}) => $isFocused && `
        
        top: ${standardSizes[$level].top};
        left: 14px;
        padding: 0 4px;
        background-color: ${Theme.colors.white800};
        /* formatação do size vai ate 14px caso o level seja s deixa a font menor  */
        font-size: ${$level === 's' ? '12px' :`${parseInt(standardSizes.s.fontsize, 10) - 2}px`};
        color: ${Theme.colors.green800};
    ` 
    }
`;

export default Label;