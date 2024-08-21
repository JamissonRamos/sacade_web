export const useServerDbInsert = async (url, userData) => {
    const insertServerDb = async () => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Erro ao criar o usuário. Por favor, tente novamente mais tarde.');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro ao inserir os dados:', error);
            throw error;
        }
    };

    return await insertServerDb(); // Retorna a promessa com os dados
};
