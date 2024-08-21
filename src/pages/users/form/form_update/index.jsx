//Styled
import * as S from '../styled';
import { Theme } from '../../../../theme';
//Hooks
import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Schema from '../validation';
import { mask, unMask } from 'remask';
import { useUsers } from '../../../../hooks/users/index';
import { useNavigate, useParams } from 'react-router-dom';
import useMasksCustom from '../../../../hooks/masks';
//Components
import { WarapperMainPage } from '../../../../components/Wrapper/pages';
import { Typography } from '../../../../components/Typography';
import Buttons from '../../../../components/buttons';
import { FieldsTemplete } from '../fields/index'
import AllFields from '../../../../components/all_fields';
import HelperText from '../../../../components/helper/text';
import { Spinner } from '../../../../components/loading_custom';
import AlertCustom from '../../../../components/alert';
import { useFirabaseCustom } from '../../../../hooks/firabase';



function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function formatDate (dateInput){
    //Verifica se o input é um objeto Date
    if (dateInput instanceof Date) {
        return format(dateInput, 'yyyy-MM-dd');
    }

    // Verifica se a string está no formato ISO
    if (typeof dateInput === 'string' && dateInput.includes('T')) {
        const date = parseISO(dateInput);
        return format(date, 'yyyy-MM-dd');
    }

    // Caso a string esteja no formato "yyyymmdd"
    if (typeof dateInput === 'string' && dateInput.length === 8) {
        const date = new Date(
            `${dateInput.slice(0, 4)}-${dateInput.slice(4, 6)}-${dateInput.slice(6, 8)}`
        );
        return format(date, 'yyyy-MM-dd');
    }

    throw new Error('Formato de data inválido');
}

function applyMasks (key, value){
    let maskPattern = '';
    Object.values(FieldsTemplete).forEach(sectionValue => {
        Object.entries(sectionValue).forEach(([fieldKey, field]) => {
            if (fieldKey === key && field.mask) {
                maskPattern = useMasksCustom[field.mask];
            }
        });
    });

    if (maskPattern) {
        return mask(value, maskPattern);
    }
}


const FormUpdate = () => {
    const [alert, setAlert] = useState(null);
    const [msgBox, setMsgBox] = useState('');
    const [fieldsToUnmask] = useState(['cpf', 'rg', 'phone', 'cep']);
    const [fieldsToHide] = useState(['email', 'password']); //Campos a ser ocultados
    const { id: idUrl } = useParams(); // Extrai o ID da URL
    const navigate = useNavigate();
    const { user, isLoading: loadingID, errorSql: errorID} = useUsers.useIDRegistrations(idUrl);
  


    const { updateUser, isLoading: loadingUpdate, errorSql: errorUpdate} = useUsers.useUpdate();
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm({
        mode: 'all',
        resolver: yupResolver(Schema),
        defaultValues: {
            rg: null, 
            email: null,
            cep: null,
            phone: null,
        },
    });

    const handleCancel = () => {
        reset ()
        navigate('/users');
    };

    const onSubmit = async (data) => {
        const cleanedValues = {};
        for (const [key, value] of Object.entries(data)) {
            if (fieldsToUnmask.includes(key)) {
                value ? cleanedValues[key] = unMask(value) : null;
            } else if (typeof value === 'string' && key !== 'email' && key !== 'id') {
                cleanedValues[key] = capitalizeFirstLetter(value);
            }else if (key == 'birthDate') {
                const dateValue = formatDate(value);
                console.log(dateValue)
                cleanedValues[key] = dateValue 
            }else {
                cleanedValues[key] = value;
            }
        }
        
        let result;
        result = await updateUser(idUrl, cleanedValues);

        if (result) {
            reset ()
            setMsgBox('Cadastro Atualizado com sucesso')
            setAlert(true)
            setTimeout(() => {
                navigate('/users');
            }, 2000);
        }else{
            setTimeout(() => {
                navigate('/users');
            }, 2000);
        }

    };

    useEffect(() => {
        if (user) {
            // Preenche os campos do formulário com os dados do usuário
            Object.keys(user).forEach(key => {
                //Verificar se meu array tem a key 
                if (fieldsToUnmask.includes(key)) {   
                    const maskedValue = applyMasks(key, user[key]);
                    setValue(key, maskedValue);
                }else if (key === 'birthDate') {
                    setValue(key, user[key]);
                }
                else {
                    setValue(key, user[key]);
                }
            });
        }
    }, [user, setValue, fieldsToUnmask]);

    
    // if (loadingID || loadingUpdate) {
    //     return <Spinner />;
    // }

    return (

        <WarapperMainPage>
            {
                errorID || errorUpdate && <AlertCustom variant={'danger'}> { errorID || errorUpdate } </AlertCustom>
            }
            {
                alert && <AlertCustom variant={'primary'}> {msgBox} </AlertCustom>
            }
    
            <Typography.Headline level='s' color={Theme.colors.green800} >
                Atualizar Usuários
            </Typography.Headline>

            {loadingID || loadingUpdate ? 
                <Spinner /> :
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.WrapInputsContainer> 
                        {
                            FieldsTemplete &&
                                Object.entries(FieldsTemplete).map(([sectionKey, sectionValue]) => (
                                    <S.WrapRowInputs key={sectionKey}>
                                        {Object.entries(sectionValue).map(([fieldKey, field]) => (
                                            //Email e Password ser alterado no for de perfil
                                            !fieldsToHide.includes(fieldKey) ? 
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
                                                        defaultValue={user ? user[fieldKey] : ''}
                                                    />
                                                : field.type  === 'date' ?
                                                    <AllFields.Date
                                                        level='n'
                                                        label={field.label}
                                                        name={fieldKey}
                                                        maskInput={field.mask}
                                                        register={register} 
                                                        setValue={setValue} 
                                                        defaultValue={user ? user[fieldKey] : ''}
                                                    />
                                                : 
                                                    <AllFields.Text
                                                        level='n'
                                                        label={field.label}
                                                        type={field.type ? field.type : 'text'}
                                                        name={fieldKey}
                                                        placeholder={`Digite seu ${field.label.toLowerCase()}`}
                                                        maskInput={field.mask}
                                                        register={register} 
                                                        setValue={setValue}
                                                        defaultValue={user ? user[fieldKey] : ''}
                                                    />  
                                                }
                                                <HelperText > { errors[fieldKey]?.message } </HelperText>
                                            </S.WrapInput> : null
                                        ))}
                                    </S.WrapRowInputs>
                                ))
                        }
                        
                        <S.WrapButtonActions>
                            
                            <S.WrapButton>
                                <Buttons.ButtonCustom 
                                    $variant={'contained'} 
                                    type='submit' 
                                    color={Theme.colors.green800} 
                                    value={'Atualizar'}  
                                    disabled={loadingID || loadingUpdate ? true : false}/>
                            </S.WrapButton>
                            <S.WrapButton>
                                <Buttons.ButtonCustom 
                                    $variant={'outline'} 
                                    type='button' 
                                    color={Theme.colors.red800} 
                                    value={'Cancelar'} 
                                    disabled={loadingID || loadingUpdate ? true : false}
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

export default FormUpdate