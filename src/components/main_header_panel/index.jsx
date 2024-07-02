import React from 'react';
import * as S from './styled';
import { Typography } from '../Typography';
import { Theme } from '../../theme';


const MainHeaderPanel = () => {
  return (
    <S.Header color={Theme.colors.blue600}>
      <S.UserLogged>
        <Typography.Body level="l" color={Theme.colors.grey500}>Olá, </Typography.Body>
        <Typography.Body level="l" color={Theme.colors.grey500}>Jamisson</Typography.Body>
      </S.UserLogged> 
    </S.Header>
  )
}

export default MainHeaderPanel