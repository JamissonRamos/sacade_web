
import styled, {css } from "styled-components";

import * as Th from "../../../theme/index"

const  typography = {
    l: {
        fontsize:      '57px', 
        letterSpacing:  '-0.25px', 
        fontWeights:    '400', 
        lineHeight:     '64px',
    },
    m: {
        fontsize:      '45px', 
        letterSpacing:  '0', 
        fontWeights:    '400', 
        lineHeight:     '52px',
    }, 
    s: {
        fontsize:      '36px', 
        letterSpacing:  '0', 
        fontWeights:    '400', 
        lineHeight:     '44px',
    },
}

export const Display = styled.h1`
    ${({ $level = 'l', color = Th.Theme.colors.green800 }) => css`
        font-size:      ${typography[$level]?.fontsize  }; 
        font-weight:    ${typography[$level]?.fontWeights  }; 
        letter-spacing: ${typography[$level]?.letterSpacing  }; 
        line-height:    ${typography[$level]?.lineHeight  }; 
        color:          ${color};   
    `}

`