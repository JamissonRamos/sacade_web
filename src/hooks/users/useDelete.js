import { useState, useCallback } from "react";
import { useFirebase } from "../firebase";

export const useDelete =  () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorSql, setErrorSql] = useState(null);

    const deleteUser = useCallback(async (id) => {
        const userIdToFind = id;
        console.log('recebido id: ', userIdToFind);
        const url = `http://localhost:3000/users/${userIdToFind}`;
        console.log('URL atualizada: ', url);
        setIsLoading(true);
        setErrorSql(null);
        try {
            console.log(userIdToFind)
            const resultApi = await useFirebase.useFirebaseDelete(url);
            if (resultApi){
                const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
                const userIndex = existingUsers.findIndex(user => user.id === userIdToFind);
            
                if (userIndex !== -1) {
                    existingUsers.splice(userIndex, 1); // Remover o usuário do array
            
                    // Atualizar o localStorage com a lista de usuários atualizada
                    localStorage.setItem('users', JSON.stringify(existingUsers));
            
                    // Retornar a lista atualizada de usuários
                    return existingUsers;
                } else {
                    throw new Error('Usuário não encontrado');
                }
            }else {
                throw new Error('Usuário não encontrado');
            }
            
        } catch (error) {
            console.error('Erro ao atualizar o usuário:', error);
            setErrorSql('Erro ao atualizar usuário: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {deleteUser, isLoading, errorSql };
};
