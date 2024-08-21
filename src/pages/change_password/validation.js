import * as yup from "yup";


const Schema = yup.object({
    email: yup
        .string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'E-mail inválido')
        .required('Campo Email é Obrigatório'),
    currentPassword: yup
        .string()
        .min(6, 'Campo Senha Atual deve ter no mínimo 6 caracteres.')
        .required('Campo Senha Atual é Obrigatório'),
    newPassword: yup
        .string()
        .min(6, 'Campo Nova Senha deve ter no mínimo 6 caracteres.')
        .oneOf([yup.ref('confirmPassword'), null], 'As senhas devem corresponder.')
        .required('Campo Nova Senha é Obrigatório'),
    confirmPassword: yup
        .string()
        .min(6, 'Campo Confirma Senha deve ter no mínimo 6 caracteres.')
        .oneOf([yup.ref('newPassword'), null], 'As senhas devem corresponder.')
        .required('Campo Confirma Senha é Obrigatório'),
}).required();


export default Schema;

/* 
    1 quando coloco a senha nova msg erro não compativél, quando coloco a senha no outro campo não muda msg;
    
*/