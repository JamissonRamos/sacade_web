// import React from 'react'
import * as S from './styled';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import { Theme } from "../../../theme";

import Form from "../../../components/form"
import WrapperFieldForm from "../../../components/Wrapper/form"
import Field from "../../../components/field"
import HelperText from "../../../components/helper/text";
import Buttons from '../../../components/buttons';
import Schema from './validation';

import WrapperFieldLink from "../../../components/Wrapper/link";
import AllFields from "../../../components/all_fields";


import { useAuth } from '../../../contexts/authContext/AuthContex';
import { useState } from 'react';
import { Spinner } from '../../../components/loading_custom';
import { useNavigate } from 'react-router-dom';


const FormLogin = () => {
  const { login } = useAuth();
  const [msgBoxErro, setMsgBoxError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

      const { register, handleSubmit, setValue, reset, formState:{ errors } } = useForm({ 
        mode: 'all',
        resolver: yupResolver(Schema)
      });



    const onSubmit = async ({email, password}) => {
      
      console.log(email)
      console.log(password)
      setMsgBoxError(false)
      setLoading(true)
      //1 autenticar dados do users;
      try {
        // await login(email, password);
        const userCredential = await login(email, password);
        console.log("Usuário logado com sucesso:", userCredential.user);
        if (userCredential){
          reset ()
          navigate('/');
        }

        setLoading(false)
        // Redirecionar ou exibir uma mensagem de sucesso
      } catch (error) {
        let msgBox;
        switch (error.code) {
          case "auth/wrong-password":
            msgBox = "Senha incorreta. Por favor, tente novamente.";
            break;
          case "auth/user-not-found":
            msgBox = "Usuário não encontrado. Verifique o email informado.";
            break;
          case "auth/invalid-email":
            msgBox = "Formato de email inválido.";
            break;
          case "auth/user-disabled":
            msgBox = "Esta conta foi desativada. Entre em contato com o suporte.";
            break;
          default:
            msgBox = "Erro ao fazer login: " + error.message;
        }
        setMsgBoxError(msgBox);
        setLoading(false);
        console.error("Erro ao fazer login:", error.message);
      }

      //2 passar valor do user para contex;

      //3 abrir o home;

    }

    

    return (
      <>
        {
          loading &&
          <S.WrapSpinner>
            <Spinner />
          </S.WrapSpinner>
        }
        <Form onSubmit={handleSubmit(onSubmit)}>
          <WrapperFieldForm >
            <AllFields.Text
              level='n'
              label='Usuário' 
              type='text' 
              name='email' 
              placeholder='Digite seu email'
              Icon={Theme.Icons.MdPerson} 
              setValue={setValue}
              register={register} 
            />
            <HelperText > { errors.email?.message } </HelperText>  
          </WrapperFieldForm>
          <WrapperFieldForm >
              <AllFields.Text
                level='n'
                label='Senha' 
                type='password' 
                name='password' 
                placeholder='Digite sua senha'
                Icon={Theme.Icons.MdLock} 
                setValue={setValue}
                register={register} 
              />    
            <HelperText > { errors.password?.message } </HelperText>
            <WrapperFieldLink>
              <Buttons.LinkCustom href="#" color={Theme.colors.green800}>
                Esqueceu sua Senha ?
              </Buttons.LinkCustom>
            </WrapperFieldLink>
            
          </WrapperFieldForm>
         
          <WrapperFieldForm>
            <S.WrapButton>
              <Buttons.ButtonCustom 
                $variant={'outline'} 
                type='submit'
                color={Theme.colors.green800} 
                value={'Fazer Login'} 
                disabled={loading ? true : false}
              />
            </S.WrapButton>
          </WrapperFieldForm>
        </Form>

        
        {
          msgBoxErro && 
          <S.MsgBoxErro> {msgBoxErro} </S.MsgBoxErro>
        }
     
      </>
    )
}

export default FormLogin