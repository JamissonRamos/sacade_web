import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import { Theme } from "../../../theme";

import Form from "../../../components/form"
import WrapperFieldForm from "../../../components/Wrapper/form"
import Field from "../../../components/field"
import HelperText from "../../../components/helper/text";
import ButtonCustom from "../../../components/buttons";
import Schema from './validation';

import { MdPerson } from "react-icons/md";
import { MdLock } from "react-icons/md";

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
          <Field.Text 
            label='Usuário' 
            type='text' 
            name='user' 
            register={register} 
            setValue={setValue}
            Icon={MdPerson} 
            placeholder='Digite somente o número do seu cpf'
          />
          <HelperText > { errors.user?.message } </HelperText>  
        </WrapperFieldForm>
        <WrapperFieldForm >
          <Field.Text 
            label='Senha' 
            type='password'
            name='password'
            register={register}
            setValue={setValue}
            Icon={MdLock}
            placeholder='Digite sua senha'
            />
            Esqueceu sua Senha?
          <HelperText > { errors.password?.message } </HelperText>
        </WrapperFieldForm>

        <WrapperFieldForm>
                <ButtonCustom 
                  $variant={'outline'} 
                  color={Theme.colors.green800} 
                  value={'Fazer Login'} 
                />
            </WrapperFieldForm>
      </Form>
    )
}

export default FormLogin