import { useState, useCallback } from "react";
import { useServeDb } from "../serverDb";
import { useFirabaseCustom } from "../firabase";

export const useDelete =  () => {
    //collection = pode ser uma chamada de alunos, users ou outro from
    const [isLoading, setIsLoading] = useState(false);
    const [errorSql, setErrorSql] = useState(null);

    const deleteUser = useCallback(async (collection, id) => {
        const userIdToFind = id;
        setIsLoading(true);
        setErrorSql(null);
        try {
            const resultApi = await useFirabaseCustom.useFirebaseDelete(collection, userIdToFind); 
            if (resultApi){
                const existingUsers = JSON.parse(localStorage.getItem(collection)) || [];
                const userIndex = existingUsers.findIndex(user => user.id === userIdToFind);
            
                if (userIndex !== -1) {
                    existingUsers.splice(userIndex, 1); // Remover o item do array
            
                    // Atualizar o localStorage com a lista de usuários atualizada
                    localStorage.setItem(collection, JSON.stringify(existingUsers));
            
                    // Retornar a lista atualizada de usuários
                    return existingUsers;
                } else {
                    throw new Error('Item não encontrado');
                }
            }else {
                throw new Error('Item não encontrado');
            }
            
        } catch (error) {
            console.error('Erro ao tenta excluir item :', error);
            setErrorSql('Erro ao tenta excluir item: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {deleteUser, isLoading, errorSql };
};
