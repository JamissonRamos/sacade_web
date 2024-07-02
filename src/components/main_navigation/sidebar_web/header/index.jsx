import React from 'react'
import * as S from './styled';
import { Theme } from '../../../../theme';
import { Typography } from '../../../Typography';

const Header = ({showSidebar}) => {
    return (
        <S.Header color={Theme.colors.grey700}>
            <S.Brand>   
                <S.ImgWrap>
                    <img src={Theme.img.Logo} alt="Logo da Empresa" /> 
                </S.ImgWrap>
                <S.TextBrand $showSidebar={showSidebar}>
                    <Typography.Headline level='m' color={Theme.colors.yellow800} >SACAJE</Typography.Headline> 
                </S.TextBrand> 
            </S.Brand>
        </S.Header>
    )
}

export default Header