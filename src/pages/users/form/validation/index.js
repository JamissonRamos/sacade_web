import * as yup from "yup";


const Schema = yup.object().shape({
    
    name: yup
        .string()
        .min(3, 'Campo Nome deve ter no mínimo 3 caracteres')
        .required('Campo Nome é obrigatório'),
    lastName: yup
        .string()
        .min(3, 'Campo Sobrenome deve ter no mínimo 3 caracteres.')
        .required('Campo Sobrenome é obrigatório'),
    cpf: yup
        .string()
        .min(11, 'Campo CPF deve ter no mínimo 11 caracteres.')
        .max(14, 'Campo CPF deve ter no máximo 14 caracteres.')
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
        .required('Campo CPF é obrigatório'),
    rg: yup.string()
        .min(8, 'Campo RG deve ter no mínimo 8 caracteres.')
        .max(13, 'Campo RG deve ter no máximo 13 caracteres.')
        .matches(/^\d{2}\.\d{3}\.\d{3}-\d{2}$/, 'RG inválido')       
        .nullable()
        .notRequired(),
    birthDate: yup
        //.string()
        .date()
        .min(new Date(1900, 0, 1), 'A data deve ser posterior a 01/01/1900')
        .max(new Date(), 'A data não pode ser no futuro')
        .required('Campo Data Nascimento é obrigatório'),
    phone: yup
        .string()
        .nullable()
        .notRequired()
        .min(11, 'Campo Celular deve ter no mínimo 11 caracteres.')
        .max(16, 'Campo Celular deve ter no máximo 16 caracteres.')
        .matches(/^\(\d{2}\) \d \d{4}-\d{4}$/, 'Número de telefone inválido'),
    email: yup
        .string()
        .nullable()
        .notRequired()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'E-mail inválido'),
    gender: yup
        .string()
        .required('Campo Gênero é obrigatório'),
    occupation: yup
        .string()
        .required('Campo Ocupação é obrigatório'),
    status: yup
        .string()
        .required('Campo Status é obrigatório'),
        // adicione outros campos conforme necessário
    cep: yup
        .string()
        .nullable()
        .notRequired()
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido'),
});




export default Schema;