import React from 'react'
import * as S from './styled';
import { Typography } from '../Typography';
import { Theme } from '../../theme';
import FormSearch from './formSearch';

import Buttons from '../buttons';
import { AllHooks } from '../../hooks';
import { useNavigate } from 'react-router-dom';


const ListHeader = ({title, subTitle}) => {
    const isValueScreen = AllHooks.useScreenWidth(375);
    const navigate = useNavigate();
    const handleShowForm = () => {
        navigate('/users/form/form_create'); // Substitua pelo caminho da página que você quer navegar
    };

    return (
        <S.Content>
            <S.WrapTitleSearch>
                <S.WrapTitle>
                    <Typography.Headline level='s' color={Theme.colors.grey800} >
                        Lista dos {title}
                    </Typography.Headline>
                    <Typography.Body level='s' color={Theme.colors.grey800} >
                        Todos os {subTitle} cadastrados no sistema
                    </Typography.Body>
                </S.WrapTitle>
                <S.WrapSearch>
                    <FormSearch />
                </S.WrapSearch>
            </S.WrapTitleSearch>
            <S.WrapButton>
                {
                    isValueScreen ?
                        <Buttons.ButtonCircle 
                            $variant={'contained'} 
                            icon={<Theme.Icons.MdAdd />}
                            color={Theme.colors.green800} 
                            onclick={handleShowForm}
                        />
                        
                    :
                        <Buttons.ButtonCustom 
                            $variant={'contained'} 
                            color={Theme.colors.green800} 
                            value={'Novo Cadastro'} 
                            onclick={handleShowForm}
                        />  
                }
            </S.WrapButton> 
        </S.Content>
    )
}

export default ListHeader