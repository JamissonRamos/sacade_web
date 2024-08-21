import { useEffect, useState, useCallback } from "react";
import { useServeDb } from "../serverDb";

export const useIDRegistrations = (ID) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorSql, setErrorSql] = useState(null);
    const [registered, setRegistered] = useState(() => {
        const savedRegistered = localStorage.getItem('users');
        return savedRegistered ? JSON.parse(savedRegistered) : [];
    });
    const [user, setUser] = useState(null);

    const fetchUsers = useCallback(async () => {
        setIsLoading(true);
        setErrorSql(null);
        try {
            const data = await useServeDb.useServerDbAllSelect('http://localhost:3000/users');

          
            localStorage.setItem('users', JSON.stringify(data));
            setRegistered(data);
        } catch (error) {
            console.error('Erro ao buscar os dados dos usuários:', error);
            setErrorSql('Erro em Usuários:' + error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        setIsLoading(true);
        const userIdToFind = ID;
        if (registered.length === 0) {
            fetchUsers();
        }else {
            const foundUser  = registered.find(user => user.id === userIdToFind);
            if (foundUser ) {
                setUser(foundUser)
                setIsLoading(false);
            }
        }
        
    }, [fetchUsers, registered, ID]);


    return { registered, user, isLoading, errorSql };
};


/* 
    1 = fazer teste excluindo user da base de dados;
    2 = fazer teste excluindo user do localStorage;

*/