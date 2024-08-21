import React, { useEffect, useState } from 'react'
import * as S  from './styled'
import { WarapperMainPage } from '../../components/Wrapper/pages'
import { Typography } from '../../components/Typography';
import { Theme } from '../../theme';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import Schema from './validation';
import AllFields from '../../components/all_fields';
import HelperText from '../../components/helper/text';
import Buttons from '../../components/buttons';
import { useAuth } from '../../contexts/authContext/AuthContex';
import AlertCustom from '../../components/alert';
import { Spinner } from '../../components/loading_custom';

const ChangePassword = () => {
  const [alert, setAlert] = useState(null);
  const [alertError, setAlertError] = useState(null);
  const [msgBox, setMsgBox] = useState(null);
  const [msgBoxError, setMsgBoxError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { updateUserEmailandPassword } = useAuth();
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
    mode: 'all',
    resolver: yupResolver(Schema),
    defaultValues: {
        email: null
    },
  });

      // Recupere o usuário logado do localStorage
      const {name, ...userLogged} = JSON.parse(localStorage.getItem('userLogged'));
      console.log(userLogged)

    const handleCancel = () => {
      reset ()
      navigate('/');
    };
    const onSubmit = async (data) => {
        console.log(data)
        setLoading(true)
        let result;
        result = await updateUserEmailandPassword(data.email, data.newPassword  );
        console.log(result)

        if (result.includes('Sucesso')) {
          console.log('certo');
            reset ()
            setMsgBox('Cadastro Atualizado com sucesso!')
            setAlert(true)
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }else{
          console.log('erro: ', result);
          let msgErro;
          let rota;
          if (result.includes('auth/requires-recent-login')){
            msgErro = 'Erro nas autenticação do usuário logado faça seu login novamente';
            rota = '/login'
          }else {
            msgErro = result
            rota = '/'
          }
            setMsgBoxError(msgErro)
            setAlertError(true)
            setTimeout(() => {
                navigate(rota);
            }, 3000);
        }
        setLoading(false)
    };

    useEffect(() => {
      // if (user) {
      //     // Preenche os campos do formulário com os dados do usuário
      //     Object.keys(user).forEach(key => {
      //         //Verificar se meu array tem a key 
      //         if (fieldsToUnmask.includes(key)) {   
      //             const maskedValue = applyMasks(key, user[key]);
      //             setValue(key, maskedValue);
      //         }else if (key === 'birthDate') {
      //             setValue(key, user[key]);
      //         }
      //         else {
      //             setValue(key, user[key]);
      //         }
      //     });
      // }
    }, []);

  return (

    <WarapperMainPage>

      {
          alert && <AlertCustom variant={'primary'}> {msgBox} </AlertCustom>
      }
      {
          alertError && <AlertCustom variant={'danger'}> {msgBoxError} </AlertCustom>
      }
      <Typography.Headline level='s' color={Theme.colors.green800} >
          Alterar Email e Senha
      </Typography.Headline>
      {loading ? 
        <Spinner /> :
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.WrapInputsContainer>
            <S.WrapRowInputs>
              <S.WrapInput>
                <AllFields.Text
                    level='n'
                    label='E-Mail'
                    type='text'
                    name='email'
                    placeholder='Digite seu email de login'
                    register={register} 
                    setValue={setValue}
                    defaultValue=''
                />  
                <HelperText > { errors.email?.message } </HelperText>
              </S.WrapInput>
              <S.WrapInput>
                <AllFields.Text
                    level='n'
                    label='Senha Atual'
                    type='password'
                    name='currentPassword'
                    placeholder='Digite sua senha atual'
                    register={register} 
                    setValue={setValue}
                    defaultValue=''
                />  
                <HelperText > { errors.currentPassword?.message } </HelperText>
              </S.WrapInput>
              <S.WrapInput>
                <AllFields.Text
                    level='n'
                    label='Nova Senha'
                    type='password'
                    name='newPassword'
                    placeholder='Digite sua senha atual'
                    register={register} 
                    setValue={setValue}
                    defaultValue=''
                />  
                <HelperText > { errors.newPassword?.message } </HelperText>
              </S.WrapInput>
              <S.WrapInput>
                <AllFields.Text
                    level='n'
                    label='Confirma Senha'
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirme sua senha'
                    register={register} 
                    setValue={setValue}
                    defaultValue=''
                />  
                <HelperText > { errors.confirmPassword?.message } </HelperText>
              </S.WrapInput>
              
            </S.WrapRowInputs>

            <S.WrapButtonActions>
              <S.WrapButton>
                <Buttons.ButtonCustom 
                  $variant={'contained'} 
                  type='submit' 
                  color={Theme.colors.green800} 
                  value={'Atualizar'}  
                //disabled={loadingID || loadingUpdate ? true : false}
                />
              </S.WrapButton>
              <S.WrapButton>
                <Buttons.ButtonCustom 
                    $variant={'outline'} 
                    type='button' 
                    color={Theme.colors.red800} 
                    value={'Cancelar'} 
                    // disabled={loadingID || loadingUpdate ? true : false}
                    onclick={handleCancel}
                    />
            </S.WrapButton>
            </S.WrapButtonActions>

          </S.WrapInputsContainer>
        </S.Form>
      }




    </WarapperMainPage>
  )
}

export default ChangePassword

/* 
  1 = verificar o email atualizado, ver se ele esta na coleção ou na base dados do cadastro user;
  2 = no caso deixa somente a atualização do email no cadastro do user e não na coleção;

*/