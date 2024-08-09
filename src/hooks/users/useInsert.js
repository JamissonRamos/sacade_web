import { useState, useCallback } from "react";
import { useFirebase } from "../../hooks/firebase/index";

export const useCreateUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorSql, setErrorSql] = useState(null);

    const createUser = useCallback(async (userData) => {
        setIsLoading(true);
        setErrorSql(null);
        try {
            const newUser = await useFirebase.useFirebaseInsert('http://localhost:3000/users', userData);
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const updatedUsers = [...existingUsers, newUser];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            console.log('novo users insert: ',  newUser)
            return newUser;
        } catch (error) {
            console.error('Erro ao criar o usuário:', error);
            setErrorSql('Erro ao criar usuário: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { createUser, isLoading, errorSql };
};
