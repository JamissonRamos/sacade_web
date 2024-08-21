
export const useServerDbIDSelect = async (url) =>{

    const fetchServerDb = async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Opa, todo mundo erra e dessa vez foi a nossa vez. Tivemos um problema ao carregar os dados. Por favor, tente novamente mais tarde.');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
            throw error;  // Re-throw the error to handle it in the calling function

        } 
    };

    return await fetchServerDb(); // Retorna a promessa com os dados
}

/* 
    Todo os select vai ser feito no localStorage toda manipulação como edite, delete, insert vai ser atualizado no localStorage e api
    entãoa chamada de select de um id não seria necessario, ja que todos os dados estão na localStorage caso cadastro não encontrado 
    deve se busca todos os dados e passar para o localStorage e fazer uma nova tentativa


*/