import * as yup from "yup";


const Schema = yup.object({
    user: yup
        .string()
        .min(3, 'Campo Usuário deve ter no mínimo 3 caracteres.')
        .required('Campo Nome Obrigatório'),
    password: yup
        .string()
        .min(6, 'Campo Senha deve ter no mínimo 6 caracteres.')
        .required('Campo Senha Obrigatório'),
}).required();


export default Schema;