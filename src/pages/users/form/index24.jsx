//Styled
import * as S from './styled';
import { Theme } from '../../../theme';
//Hooks
import { useEffect, useState } from 'react';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Schema from './validation';
import { mask, unMask } from 'remask';
import { useUsers } from '../../../hooks/users/index';
import { useNavigate, useParams } from 'react-router-dom';
import useMasksCustom from '../../../hooks/masks';
//Components
import { WarapperMainPage } from '../../../components/Wrapper/pages';
import { Typography } from '../../../components/Typography';
import Buttons from '../../../components/buttons';
import { FieldsTemplete } from './fields/index'
import AllFields from '../../../components/all_fields';
import HelperText from '../../../components/helper/text';
import { Spinner } from '../../../components/loading_custom';
import AlertCustom from '../../../components/alert';


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function formatDate (dateStr) {
    if (dateStr.length === 8) {
        return `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`;
    }
    return dateStr;
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

const FormUser = () => {
    const [alert, setAlert] = useState(null);
    const [msgBox, setMsgBox] = useState('');

    const [fieldsToUnmask] = useState(['cpf', 'rg', 'phone', 'cep']);
    const [validateHookCall, setValidateHookCall] = useState(false); //Validar se pode ou não chamar o hook
    const { id: idUrl } = useParams(); // Extrai o ID da URL
    const navigate = useNavigate();
    const { user, isLoading: loadingID, errorSql: errorID} = idUrl ? useUsers.useIDRegistrations(idUrl) 
        : { user: null, isLoading: false, errorSql: null };
    const { createUser, isLoading, errorSql } =  useUsers.useCreateUser();
    const { registeredUpdate, isLoading: loadingUpdate, errorSql: errorUpdate} =  validateHookCall ? useUsers.useUpdate(idUrl) 
        : { registeredUpdate: null, isLoading: false, errorSql: null}
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        mode: 'all',
        resolver: yupResolver(Schema),
        defaultValues: {
            rg: null, 
            email: null,
        },
    });

    
    const onSubmit = async (data) => {
        const cleanedValues = {};
        for (const [key, value] of Object.entries(data)) {
            if (fieldsToUnmask.includes(key)) {
                cleanedValues[key] = unMask(value);
            } else if (typeof value === 'string') {
                cleanedValues[key] = capitalizeFirstLetter(value);
            } else {
                cleanedValues[key] = value;
            }
        }
        let result;
        
        if (idUrl){
            console.log('Atualizar')
            
            console.log(validateHookCall)
            result = await registeredUpdate(cleanedValues);
            setMsgBox('Cadastro Atualizado com sucesso')
        }else{
            
            console.log('Salvar')
            result = await createUser(cleanedValues);
            setMsgBox('Cadastro Salvo com sucesso')
        }

        if (result) {
            // Lidar com o sucesso do registro, por exemplo, redirecionar ou exibir uma mensagem de sucesso
            setAlert(true)
            // Espera 2 segundos antes de navegar para a lista de usuários
            setTimeout(() => {
                navigate('/users');
            }, 2000);
        }
    };

    

    useEffect(() => {
        if (user) {
            setValidateHookCall(true)
            // Preenche os campos do formulário com os dados do usuário
            Object.keys(user).forEach(key => {
                //Verificar se meu array tem a key 
                if (fieldsToUnmask.includes(key)) {   
                    const maskedValue = applyMasks(key, user[key]);
                    setValue(key, maskedValue);
                }else if (key === 'birthDate') {
                    const dateValue = formatDate(user[key]);
                    setValue(key, dateValue);
                }
                else {
                    setValue(key, user[key]);
                }
            });
        }
    }, [user, setValue, fieldsToUnmask]);

    
    if (isLoading || loadingID || loadingUpdate) {
        return <Spinner />;
    }

    return (

        <WarapperMainPage>
            {
                errorSql || errorID || errorUpdate && <AlertCustom variant={'danger'}> {errorSql || errorID} </AlertCustom>
            }
            {
                alert && <AlertCustom variant={'primary'}> {msgBox} </AlertCustom>
            }
    
            <Typography.Headline level='s' color={Theme.colors.green800} >
                {idUrl ? 'Atualizar' : 'Cadastrar' }  Usuários
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
                                                // maskInput={field.mask}
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
                            {idUrl ? 
                                <Buttons.ButtonCustom $variant={'contained'} type='submit' color={Theme.colors.green800} value={'Atualizar'}/>
                                :
                                <Buttons.ButtonCustom $variant={'contained'} type='submit' color={Theme.colors.green800} value={'Salvar'}/>
                            } 
                        </S.WrapButton>
                        <S.WrapButton>
                            <Buttons.ButtonCustom $variant={'outline'} type='submit' color={Theme.colors.red800} value={'Cancelar'}/>
                        </S.WrapButton>
                        
                    </S.WrapButtonActions>
                </S.WrapInputsContainer>
            </S.Form>
        </WarapperMainPage>
    )
}

export default FormUser


/* 
    
    3 =  na hora de busca os dados e passar os dados para os campo aplicar as regras de mascaras;
    4 = Ver como colocar os dado nos campos de select e data;
    5 = Coloca o titulo do form de acordo o que vai fazer o no form edite ou cadastras;
    6 = Criar um buttom de editar para ser colocado no lugar do salvar quando for para editar user;
    7 = tenta criar regra de carrega pagina com o split paracerega os dados no campso
    8 =  quando o campo que tem masck é passo vazio da erro;
    9 = verificar erro de data, a data esta salvando 19940501;
    10 =  criar a função do botão cancelar;

    */