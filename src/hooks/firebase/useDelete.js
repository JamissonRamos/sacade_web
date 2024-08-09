
export const useFirebaseDelete = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Opa, todo mundo erra e dessa vez foi a nossa vez. Tivemos um problema ao tenta excluir os dados. Por favor, tente novamente mais tarde.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao tenta excluir os dados:', error);
        throw error;  // Re-throw the error to handle it in the calling function
    } 

}

