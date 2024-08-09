//Styled
import * as S from './styled';
import { Theme } from '../../../theme';
//Components
import { WarapperMainPage } from '../../../components/Wrapper/pages';
import Steps from '../../../components/steps';
import { Typography } from '../../../components/Typography';
import Buttons from '../../../components/buttons';
//Elements form
import Information from './inputs/information';
import Contacts from './inputs/contacts';
import Address from './inputs/address';
//Hooks
import { useChooseForm } from '../../../hooks/choose_form';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Schema from './validetion/validation';


const formTemplate = {
    first: 
        {
            name: {label: 'Nome', value: ""},
            lastName: {label: 'Sobrenome',  column: 2, value: ""},
        },
    second:
        {   
            CPF: {label: 'CPF', value: ""},
            RG: {label: 'RG', value: ""},
            birthDate: {label: 'Data Nascimento', value: ""},
        },
    third: 
    {
        phone: {label: 'Celular', value: ""},
        email: {label: 'Email', value: ""},
    },
    room:
    {
        gender: {label: 'Gênero', value: ""},
        occupation: {label: 'Ocupação', value: ""},
        status: {label: 'Status', value: ""}
    }
};

const FormUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(Schema),
        mode: 'onBlur',
    });
    const [data, setData] = useState(formTemplate);

    const updateFieldHandler = (key, value) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
    };
    console.log(errors)
    const formComponents = [
        <Information key="Information" register={register} errors={errors} data={data}   />,
        <Contacts key="Contacts"  />,
        <Address  key="Address"  />
    ];

    const {currentStep, currentComponent, isLastStep, isFirstStep, changeStep} = useChooseForm(formComponents)

    

    const onSubmit = (e, data) => {
        console.log(data);
        if (!isLastStep) {
            changeStep(currentStep + 1, e);
        } else {
            alert(JSON.stringify(data));
        }
    };





    return (
        <WarapperMainPage>
            <Steps currentStep={currentStep}/>
            <Typography.Headline level='s' color={Theme.colors.grey800} >
                Cadastro de Usuários
            </Typography.Headline>
            <S.Form onSubmit={(e) => handleSubmit(onSubmit(e))}>
                <S.WrapInputsContainer> 
                    {currentComponent} 
                </S.WrapInputsContainer>
                <S.WrapButtonActions>
                    {
                        !isFirstStep ? 
                            <S.WrapButtonCircule>
                                <Buttons.ButtonCircle 
                                    $variant={'contained'} 
                                    Icon={<Theme.Icons.MdArrowBack />}
                                    type={'button'} 
                                    onclick={() => changeStep(currentStep - 1)} 
                                />
                            </S.WrapButtonCircule>
                        : null
                    }
                    {
                        !isLastStep ?
                            <S.WrapButtonCircule>
                                <Buttons.ButtonCircle 
                                    $variant={'contained'} 
                                    Icon={<Theme.Icons.MdArrowForward/>}
                                    type='submit'
                                    onclick={() => changeStep}/>
                            </S.WrapButtonCircule>
                        :
                        <S.WrapButton>
                            <Buttons.ButtonCircle $variant={'contained'} type='submit' value={'Salvar'} onclick={() => changeStep}/>
                        </S.WrapButton>
                    }
                </S.WrapButtonActions>
            </S.Form>
        </WarapperMainPage>
    )
}

export default FormUser


/* 
    1 = quando esta no modulo mobile o actives não aparece, coloca eles para cima
*/