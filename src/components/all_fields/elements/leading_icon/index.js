import styled from "styled-components";
import { Theme } from "../../../../theme";

const iconSizes = {
    l: {
        fontSizeIcon:  '24px',
    },
    m: { 
        fontSizeIcon:  '22px',
    },
    n: { 
        fontSizeIcon:  '20px',
    }, 
    s: {  
        fontSizeIcon:  '16px',  
    },
};
export const LeadingIcon = styled.div`
    /* border: 1px solid red; */
    position: absolute;
    top: 100%;
    left: 12px;
    /* transform: translateY(-50%); */
    transform: translateY(-2rem);
    display: flex;
    transition: color 0.4s;
    & svg {
        font-size: ${({$level}) => iconSizes[$level].fontSizeIcon };
        color: ${({$isFocused}) => $isFocused ? Theme.colors.green800 : Theme.colors.grey600};
    }
`;