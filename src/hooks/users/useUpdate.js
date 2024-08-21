import { useState, useCallback } from "react";
import { useFirabaseCustom } from "../firabase";
import { useAuth } from "../../contexts/authContext/AuthContex";

export const useUpdate =  () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorSql, setErrorSql] = useState(null);
    const collection = 'users';
    const { currentUser } = useAuth();

    const updateUser = useCallback(async (id, newData) => {
        const userIdToFind = id;
        setIsLoading(true);
        setErrorSql(null);
        try {
            const newUser = await useFirabaseCustom.useFirebaseUpdate(collection, newData);
            if(newUser){
                const existingUsers = JSON.parse(localStorage.getItem(collection)) || [];
                const userIndex = existingUsers.findIndex(user => user.id === userIdToFind);
                if (userIndex !== -1) {
                    existingUsers[userIndex] = { ...existingUsers[userIndex], ...newData };
                    localStorage.setItem(collection, JSON.stringify(existingUsers));
                    //Atualizando usuario logado
                    if ( userIdToFind === currentUser.uid){
                        localStorage.setItem('userLogged', JSON.stringify(newData));
                    }else{
                        console.log('Algo saiu errado, usuário logado não atualizado!')
                    }
                    return existingUsers[userIndex];
                }else {
                    setErrorSql('Usuário não encontrado no localStorage com o ID fornecido:', id)
                    console.error('Usuário não encontrado no localStorage com o ID fornecido:', id);
                    return null;
                }
            } else {
                //Caso a base no localStorag esteja fora
                setErrorSql('Algo não saiu como esperado. Por favor, tente novamente.');
                console.error('Algo não saiu como esperado. Por favor, tente novamente.');
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
