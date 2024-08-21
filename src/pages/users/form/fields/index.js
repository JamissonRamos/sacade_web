export const FieldsTemplete = {
    first: 
        {
            name: {label: 'Nome', value: ""},
            lastName: {label: 'Sobrenome',  column: 2, value: ""},
        },
    second:
        {   
            cpf: {label: 'CPF', mask: 'cpf', value: ""},
            rg: {label: 'RG', mask: 'rg', value: ""},
            birthDate: {label: 'Data Nascimento', type: 'date', value: ""},
        },
    third: 
    {
        phone: {label: 'Celular', mask: 'phone', value: ""},
        email: {label: 'Email', column: 2, value: ""},
    },
    room:
    {
        gender: {
            label: 'Gênero',  
            type: 'select',  
            //value: "",
            options: [
                { value: 'Masculino', label: 'Masculino' },
                { value: 'Feminino', label: 'Feminino' },
                { value: 'Outro', label: 'Outro' },
            ],
        },
        occupation: {
            label: 'Ocupação',  
            type: 'select', 
            //value: "",
            options: [
                { value: 1, label: 'Administrador' },
                { value: 2, label: 'Professor' },
                { value: 3, label: 'Assistente' },
            ],
        },
        status: {
            label: 'Status',  
            type: 'select', 
            //value: "",
            options: [
                { value: 'Ativo', label: 'Ativo' },
                { value: 'Desativado', label: 'Desativado' },
            ],
        }
    },
    Friday:
    {
        cep: {label: 'Cep', mask: 'cep', value: ""},
        logadouro: {label: 'Logadouro', column: 2, value: ""},
    },
    seventh:
    {
        number: {label: 'Número Residencia', value: ""},
        neighborhood: {label: 'Bairro', value: ""},
        city: {label: 'Cidade', value: ""}
    },
    eighth:
    {
        uf: {label: 'UF',  mask: 'uf', value: ""},
        reference: {label: 'Referência',  column: 2, value: ""}
    },
    ninth:
    {
        password: {label: 'Senha', value: ""},
    }
};