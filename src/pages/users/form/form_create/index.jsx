//Styled
import * as S from '../styled';
import { Theme } from '../../../../theme';
//Hooks
import { useState } from 'react';
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

    const [fieldsToUnmask] = useState(['cpf', 'rg', 'phone', 'cep']);
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
        for (const [key, value] of Object.entries(data)) {
            if (fieldsToUnmask.includes(key)) {
                //cleanedValues[key] = unMask(value);
                value ? cleanedValues[key] = unMask(value) : null;
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

    if (isLoading) {
        return <Spinner />;
    }

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
                                            />
                                        : field.type  === 'date' ?
                                            <AllFields.Date
                                                level='n'
                                                label={field.label}
                                                name={fieldKey}
                                                maskInput={field.mask}
                                                register={register} 
                                                setValue={setValue} 
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
        </WarapperMainPage>
    )
}

export default FormCreate


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
    11 = resetar o form depois que os dados forem salvo, na hora de fechar o form e chamar na lista;
    * 12 = quando rento salva um cadastro e os campos de masca não tem nada a ser salvo a lib de mask da erro;
    11 = coloca o campo de uf para receber somente 2 letras maiscula;
    13 = ao clicar no cancela ele da erro no submit;
    */