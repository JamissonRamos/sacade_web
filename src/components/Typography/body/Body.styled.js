import styled, {css} from "styled-components";

import * as Th from "../../../theme/index"

const  typography = {


    l: {
        fontsize:      '16px', 
        letterSpacing:  '0.5px', 
        fontWeights:    '400', 
        lineHeight:     '24px',
    },
    m: {
        fontsize:      '14px', 
        letterSpacing:  '0.25px', 
        fontWeights:    '400', 
        lineHeight:     '20px',
    }, 
    s: {
        fontsize:      '12px', 
        letterSpacing:  '0', 
        fontWeights:    '400', 
        lineHeight:     '16px',
    },
}

export const Body = styled.p`
    ${({ $level = 'l', color = Th.Theme.colors.grey800 }) => css`
        font-size:      ${typography[$level]?.fontsize  }; 
        font-weight:    ${typography[$level]?.fontWeights  }; 
        letter-spacing: ${typography[$level]?.letterSpacing  }; 
        line-height:    ${typography[$level]?.lineHeight  }; 
        color:          ${color};   
    `}
`