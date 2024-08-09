import React from 'react';
import * as S from './styled';

const ButtonCircle = ({ $variant, type='button', color = '#1F7EE6', icon, value, onclick }) => {

    return (
        <S.StyledButton $variant={$variant} type={type} color={color} onClick={onclick}>
            {icon && <span> {icon} </span> }
            {value}
        </S.StyledButton>
        
    );
};

export default ButtonCircle;