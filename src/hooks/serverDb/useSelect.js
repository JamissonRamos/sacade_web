
export const useServerDbAllSelect = async (url) =>{

    const fetchServerDb = async () => {
        try {
            const response = await fetch(url);
            console.log(url+4)
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
