//Hocks
import React from 'react';
import { useLocalStorage } from '../../hooks/local_storage';
//Styled
import * as S from './styled';
//Components
import { Typography } from '../Typography';
import { Theme } from '../../theme';

const MainHeaderPanel = () => {
  const nameUserLogged = useLocalStorage.useGetUserName();
  return (
    <S.Header color={Theme.colors.blue600}>
      <S.UserLogged>
        <Typography.Body level="l" color={Theme.colors.grey500}>Olá, </Typography.Body>
        <Typography.Body level="l" color={Theme.colors.grey500}>
          {nameUserLogged} </Typography.Body>
      </S.UserLogged> 
    </S.Header>
  )
}

export default MainHeaderPanel