// import React from "react";

//IMG & ICON
import logo from "../../assets/login/logo_luta.png";
import avatar_man from "../../assets/login/avatar_man.png";
import { FaGoogle } from "react-icons/fa";

//Css
import { Theme } from '../../theme'
import * as S from './style/index'

//Components
import { Typography } from '../../components/Typography'
// import ButtonCustom from "../../components/buttons";
import Buttons from "../../components/buttons";
import FormLogin from "./form/index";



const Login = () => {

    const getTextLevel = () => {
        return window.innerWidth <= 1024 ? 's' : 'm';
    };

    const onclick = () => {
        console.log('Clicou')
    }
    return ( 
        <S.Main>
            <S.Container>
                <S.Panel>
                    <S.PanelLeft >
                        <S.ContentLeftHeader>
                            <Typography.Display 
                                level={'s'} 
                                color={Theme.colors.white800}
                            >
                                Seja bem-vindo!
                            </Typography.Display>
                            <Typography.Body 
                                level={getTextLevel()} 
                                color={Theme.colors.white800}
                            >
                                Para ter acesso ao sistema, você deve efetuar o seu login. O seu cadastro deve ser feito pelo administrador do sistema.
                            </Typography.Body>
                        </S.ContentLeftHeader> 
                        <S.ContentBody>
                            <S.WrappedImg>
                                <S.Img src={logo} alt="Capa da academia" />
                            </S.WrappedImg>
                            <S.WrappedButtonGoogleText>
                                <Typography.Body level={'m'} color={Theme.colors.white800}>
                                    Você também pode fazer o acesso pelo Google, mas o seu email deve estar cadastrado no sistema.
                                </Typography.Body>
                                <Buttons.ButtonCustom 
                                    $variant={'contained'} 
                                    color={Theme.colors.yellow800}
                                    icon={<FaGoogle/>}
                                    onclick={onclick}
                                    value={'Google'}
                                />
                            </S.WrappedButtonGoogleText>
                        </S.ContentBody>
                        <S.ContentFooter>
                            <Typography.Body level={"s"} color={Theme.colors.white800}>V.1.0.0</Typography.Body>
                        </S.ContentFooter>
                    </S.PanelLeft>
                    <S.PanelRight >
                        <S.ContentRightHeader>
                            <S.WrappedImg>
                                <S.Img src={avatar_man} alt="Avatar de um Homem" />
                            </S.WrappedImg>
                            <Typography.Headline level="s" color={Theme.colors.green800} >
                                Fazer Login
                            </Typography.Headline>
                        </S.ContentRightHeader>
                        <S.ContentRightBody>
                            <FormLogin />
                        </S.ContentRightBody>
                    </S.PanelRight>
                </S.Panel>
            </S.Container>
        </S.Main>  
    )
}

export default Login