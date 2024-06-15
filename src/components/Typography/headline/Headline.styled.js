
import styled, {css } from "styled-components";

import * as Th from "../../../theme/index"

const  typography = {
    l: {
        fontsize:      '32px', 
        letterSpacing:  '0', 
        fontWeights:    '400', 
        lineHeight:     '40px',
    },
    m: {
        fontsize:      '28px', 
        letterSpacing:  '0', 
        fontWeights:    '400', 
        lineHeight:     '36px',
    }, 
    s: {
        fontsize:      '24px', 
        letterSpacing:  '0', 
        fontWeights:    '400', 
        lineHeight:     '32px',
    },
}

export const HeadlineStyled = styled.h2`
    ${({ $level = 'l', color = Th.Theme.colors.grey800 }) => css`
        font-size:      ${typography[$level]?.fontsize  }; 
        font-weight:    ${typography[$level]?.fontWeights  }; 
        letter-spacing: ${typography[$level]?.letterSpacing  }; 
        line-height:    ${typography[$level]?.lineHeight  }; 
        color:          ${color};   
    `}

`