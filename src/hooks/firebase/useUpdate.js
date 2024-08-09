
export const useFirebaseUpdate = async (url, newData) => {
    try {
        const response = await fetch(url, {
            method: 'PUT', // ou 'PATCH', dependendo da sua API
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        });
        
        if (!response.ok) {
            throw new Error('Opa, todo mundo erra e dessa vez foi a nossa vez. Tivemos um problema ao carregar os dados. Por favor, tente novamente mais tarde.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
        throw error;  // Re-throw the error to handle it in the calling function
    } 

}

