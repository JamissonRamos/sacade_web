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



const FormLogin = () => {

      const { register, handleSubmit, setValue, formState:{ errors } } = useForm({ 
        mode: 'onBlur',
        resolver: yupResolver(Schema)
      });



    const onSubmit = data => alert(data);
    console.log(errors);

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <WrapperFieldForm >
          <AllFields.Text
            level='m'
            label='Usuário' 
            type='text' 
            name='user' 
            placeholder='Digite seu email'
            Icon={Theme.Icons.MdPerson} 
            register={register} 
          />
          <HelperText > { errors.user?.message } </HelperText>  
        </WrapperFieldForm>
        <WrapperFieldForm >
            <AllFields.Text
              level='m'
              label='Senha' 
              type='password' 
              name='password' 
              placeholder='Digite sua senha'
              Icon={Theme.Icons.MdLock} 
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
              color={Theme.colors.green800} 
              value={'Fazer Login'} 
              
            />
          </S.WrapButton>
        </WrapperFieldForm>
      </Form>
    )
}

export default FormLogin