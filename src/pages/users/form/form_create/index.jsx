//Styled
import * as S from '../styled';
import { Theme } from '../../../../theme';
//Hooks
import React, { useState } from 'react';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Schema from '../validation';
import { unMask } from 'remask';
import { useUsers } from '../../../../hooks/users/index';
import { useNavigate } from 'react-router-dom';
//Components
import { WarapperMainPage } from '../../../../components/Wrapper/pages';
import { Typography } from '../../../../components/Typography';
import Buttons from '../../../../components/buttons';
import { FieldsTemplete } from '../fields/index'
import AllFields from '../../../../components/all_fields';
import HelperText from '../../../../components/helper/text';
import { Spinner } from '../../../../components/loading_custom';
import AlertCustom from '../../../../components/alert';


function capitalizeFirstLetter(string) {
    /* 
        ° Aplicar a regra de deixa a 1 letra em caixa alta
    */
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function formatDate (date) {
    const d = new Date(date);
    d.setUTCHours(0, 0, 0, 0);
    return d.toISOString().split('T')[0];
}

const FormCreate = () => {
    const [alert, setAlert] = useState(null);
    const [msgBox, setMsgBox] = useState('');

    const [fieldsToUnmask] = useState(['cpf', 'rg', 'phone', 'cep', 'uf']);
    const navigate = useNavigate();
    const { createUser, isLoading, errorSql } =  useUsers.useCreateUser();
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        mode: 'all',
        resolver: yupResolver(Schema),
        defaultValues: {
            rg: null, 
            phone: null,
            cep: null,
            email: null,
        },
    });

    const handleCancel = () => {
        reset ()
        navigate('/users');
    };

    const onSubmit = async (data) => {

        const cleanedValues = {};
        //Atribuir password e a senha padrão
        data.password = '123456789';
        for (const [key, value] of Object.entries(data)) {
            if (fieldsToUnmask.includes(key)) {
                value ? cleanedValues[key] = unMask(value) : cleanedValues[key] = null;
            } else if (typeof value === 'string' && key !== 'email') {
                cleanedValues[key] = capitalizeFirstLetter(value);
            }else if (key == 'birthDate') {
                cleanedValues[key] = formatDate(value)
            }else {
                cleanedValues[key] = value;
            }
        }

        let result;
        result = await createUser(cleanedValues);
        if (result) {
            setMsgBox('Cadastro Salvo com sucesso')
            reset ()
            setAlert(true)
            setTimeout(() => {
                navigate('/users');
            }, 2000);
        }
    };

    return (

        <WarapperMainPage>
            {
                errorSql && <AlertCustom variant={'danger'}> {errorSql} </AlertCustom>
            }
            {
                alert && <AlertCustom variant={'primary'}> {msgBox} </AlertCustom>
            }

            <Typography.Headline level='s' color={Theme.colors.green800} >
                Cadastrar Usuários
            </Typography.Headline>

            {
                isLoading ? <Spinner /> :
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.WrapInputsContainer> 
                        {
                            FieldsTemplete &&

                            Object.entries(FieldsTemplete).map(([sectionKey, sectionValue]) => (

                                <S.WrapRowInputs key={sectionKey}>
                                    
                                    {Object.entries(sectionValue).map(([fieldKey, field]) => (
                                        
                                        fieldKey !== 'password' ? 
                                        
                                            <S.WrapInput key={fieldKey} $flex={field.column}>

                                        { field.type === 'select' ?
                                            <AllFields.SelectCustom
                                                level='n'
                                                label={field.label}
                                                name={fieldKey}
                                                maskInput={field.mask}
                                                register={register} 
                                                setValue={setValue} 
                                                options={field.options}
                                            />
                                        : field.type  === 'date' ?
                                            <AllFields.Date
                                                level='n'
                                                label={field.label}
                                                name={fieldKey}
                                                maskInput={field.mask}
                                                setValue={setValue} 
                                                register={register} 
                                            />
                                        : 
                                            <AllFields.Text
                                                level='n'
                                                label={field.label}
                                                type={field.type ? field.type : 'text'}
                                                name={fieldKey}
                                                placeholder={`Digite seu ${field.label.toLowerCase()}`}
                                                maskInput={field.mask}
                                                setValue={setValue}
                                                register={register} 
                                            />  
                                        }
                                        <HelperText > { errors[fieldKey]?.message } </HelperText>
                                            </S.WrapInput>
                                        : null
                                    ))}
                                </S.WrapRowInputs>
                            ))
                        }
                        
                        <S.WrapButtonActions>
                            
                            <S.WrapButton>
                                <Buttons.ButtonCustom  $variant={'contained'} type='submit' color={Theme.colors.green800} value={'Salvar'}  disabled={isLoading ? true : false}/>
                            </S.WrapButton>
                            <S.WrapButton>
                                <Buttons.ButtonCustom  
                                    $variant={'outline'} 
                                    type='submit' 
                                    color={Theme.colors.red800} 
                                    value={'Cancelar'} 
                                    disabled={isLoading ? true : false}
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

export default FormCreate
