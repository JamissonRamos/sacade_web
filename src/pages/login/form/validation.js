import * as yup from "yup";


const Schema = yup.object({
    email: yup
        .string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'E-mail inválido')
        .required('Campo Usuário Obrigatório'),
    password: yup
        .string()
        .min(6, 'Campo Senha deve ter no mínimo 6 caracteres.')
        .required('Campo Senha Obrigatório'),
}).required();


export default Schema;