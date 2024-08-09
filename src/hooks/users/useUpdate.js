import { useState, useCallback } from "react";
import { useFirebase } from "../firebase";

export const useUpdate =  () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorSql, setErrorSql] = useState(null);

    const updateUser = useCallback(async (id, newData) => {
        const userIdToFind = id;
        const url = `http://localhost:3000/users/${userIdToFind}`;
        setIsLoading(true);
        setErrorSql(null);
        try {
            const newUser = await useFirebase.useFirebaseUpdate(url, newData);
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const userIndex = existingUsers.findIndex(user => user.id === userIdToFind);
            if (userIndex !== -1) {
                existingUsers[userIndex] = { ...existingUsers[userIndex], ...newUser };
                localStorage.setItem('users', JSON.stringify(existingUsers));
                return existingUsers[userIndex];
            }else {
                console.error('Usuário não encontrado com o ID fornecido:', id);
                return null;
            }
        } catch (error) {
            console.error('Erro ao atualizar o usuário:', error);
            setErrorSql('Erro ao atualizar usuário: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return {updateUser, isLoading, errorSql };
};
