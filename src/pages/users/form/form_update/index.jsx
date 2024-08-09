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
    const { id: idUrl } = useParams(); // Extrai o ID da URL
    const navigate = useNavigate();
    const { user, isLoading: loadingID, errorSql: errorID} = useUsers.useIDRegistrations(idUrl);
    // const { createUser, isLoading, errorSql } =  useUsers.useCreateUser();
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
            } else if (typeof value === 'string' && key !== 'email') {
                cleanedValues[key] = capitalizeFirstLetter(value);
            }else if (key == 'birthDate') {
                const dateValue = formatDate(value);
                console.log(dateValue)
                cleanedValues[key] = dateValue 
                //const formattedDate = formatDate(defaultValue);

            }else {
                cleanedValues[key] = value;
            }
        }
        let result;
        console.log('Atualizar')
        console.log('Novo valor: ', cleanedValues)
        result = await updateUser(idUrl, cleanedValues);

        if (result) {
            reset ()
            setMsgBox('Cadastro Atualizado com sucesso')
            setAlert(true)
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

    
    if (loadingID || loadingUpdate) {
        return <Spinner />;
    }

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
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.WrapInputsContainer> 
                    {
                        FieldsTemplete &&

                        Object.entries(FieldsTemplete).map(([sectionKey, sectionValue]) => (

                            <S.WrapRowInputs key={sectionKey}>
                                
                                {Object.entries(sectionValue).map(([fieldKey, field]) => (
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
                                    </S.WrapInput>
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
        </WarapperMainPage>
    )
}

export default FormUpdate


/* 
    1 = quando esta no modulo mobile o actives não aparece, coloca eles para cima;
    2 = no camo email quando selecionado o campo fica obrigatorio tira isso e deixa não obrigatorio;
    3 =  na hora de busca os dados e passar os dados para os campo aplicar as regras de mascaras;
    4 = Ver como colocar os dado nos campos de select e data;
    5 = Coloca o titulo do form de acordo o que vai fazer o no form edite ou cadastras;
    6 = Criar um buttom de editar para ser colocado no lugar do salvar quando for para editar user;
    7 = tenta criar regra de carrega pagina com o split paracerega os dados no campso
    8 =  quando o campo que tem masck é passo vazio da erro;
    9 = verificar erro de data, a data esta salvando 19940501;
    10 =  criar a função do botão cancelar;
    11 = coloca o campo de uf para receber somente 2 letras maiscula;

    */