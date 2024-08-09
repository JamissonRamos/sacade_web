import React from 'react';
import { StyledButton } from './style';

const ButtonCustom = ({ $variant = 'contained', type = 'button', color = '#1F7EE6', icon, value, disabled = false, onclick }) => {
    return (
        <StyledButton  $variant={$variant} type={type} color={color} disabled={disabled} onClick={onclick}>
            {icon && <span> {icon} </span> }
            {value}
        </StyledButton>
        
    );
};

export default ButtonCustom;