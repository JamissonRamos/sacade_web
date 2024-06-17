import React from 'react';
import { StyledButton } from './style';

const ButtonCustom = ({ $variant, color = '#1F7EE6', icon, value, onclick }) => {

    console.log($variant)
    return (
        <StyledButton $variant={$variant} color={color} onClick={onclick}>
            {icon && <span> {icon} </span> }
            {value}
        </StyledButton>
        
    );
};

export default ButtonCustom;