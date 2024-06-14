// import React from "react";

//IMG & ICON
import logo from "../../assets/login/logo_luta.png";

//Css
import { Theme } from '../../theme'
import * as S from './style/index'

//Components
import { Typography } from '../../components/Typography'


const Login = () => {

    const getTextLevel = () => {
        return window.innerWidth <= 1024 ? 's' : 'm';
    };
    return ( 
        <S.Main>
            <S.Container>
                <S.Panel>
                    <S.PanelLeft >
                        <S.ContentLeftHeader>
                            <Typography.Display 
                                level={getTextLevel()} 
                                color={Theme.colors.white800}
                            >
                                Seja bem-vindo!
                            </Typography.Display>
                            <Typography.Body 
                                level={'l'} 
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
                                <Typography.Body level={'l'} color={Theme.colors.white800}>
                                    Você também pode fazer o acesso pelo Google, mas o seu email deve estar cadastrado no sistema.
                                </Typography.Body>
                                
                            </S.WrappedButtonGoogleText>
                        </S.ContentBody>
                        <S.ContentFooter>
                            Footer
                        </S.ContentFooter>
                    </S.PanelLeft>
                    <S.PanelRight >
                        Right
                    </S.PanelRight>
                </S.Panel>
            </S.Container>
        </S.Main>  
    )
}

export default Login