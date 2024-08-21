import React from 'react'
import * as S from './styled'
import { WarapperMainPage } from '../../components/Wrapper/pages'
import { Theme } from '../../theme'
import { Typography } from '../../components/Typography'
import Buttons from '../../components/buttons'
import { useNavigate, useParams } from 'react-router-dom'

const NoticeAuthorization = () => {
    const { nameUser } = useParams(); // Extrai o ID da URL
    const navigate = useNavigate();
    const handleOnclick = () => {
        navigate(`/`)
    }
    return (
        <WarapperMainPage >
            <S.Container>
                <S.WrapIcon>
                    <Theme.Icons.MdLockPerson />
                </S.WrapIcon>
                <S.WrapText>
                    <S.WrapTitle> 
                    <Typography.Headline level='m' color={Theme.colors.grey600} >
                        ops{nameUser && ',' }  
                    </Typography.Headline>
                    <Typography.Headline level='m' color={Theme.colors.yellow800} >
                        { nameUser && ' ' + nameUser   }
                    </Typography.Headline>
                    <Typography.Headline level='m' color={Theme.colors.grey600} >
                        ! Acesso negado
                    </Typography.Headline>
                    </S.WrapTitle>


                    <Typography.Body level='n' color={Theme.colors.grey600} >
                        Desculpe, mas você não possui permissão para acessar esta seção do sistema :(
                    </Typography.Body>
                </S.WrapText>
                <S.WrapButton>
                    <Buttons.ButtonCustom 
                        $variant='outline'
                        color={Theme.colors.yellow800}
                        value={'Voltar para Home'}
                        onclick={handleOnclick}
                    />
                </S.WrapButton>

                <S.WrapImg>
                    <img src={Theme.img.Security } alt="Imagem de Segurança da Página"  />
                </S.WrapImg>


            
              


            </S.Container>
        </WarapperMainPage>
    )
}

export default NoticeAuthorization