import { useEffect, useState, useCallback } from "react";
import { useFirebase } from "../firebase";

export const useAllRegistrations = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorSql, setErrorSql] = useState(null);
    const [registered, setRegistered] = useState(() => {
        const savedRegistered = localStorage.getItem('users');
        return savedRegistered ? JSON.parse(savedRegistered) : [];
    });

    const fetchUsers = useCallback(async () => {
        setIsLoading(true);
        setErrorSql(null);
        try {
            const data = await useFirebase.useFirebaseAllSelect('http://localhost:3000/users');
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
        const savedRegistered = localStorage.getItem('users');
        if (!savedRegistered) {
            fetchUsers();
        }
    }, [fetchUsers]);

    return { registered, isLoading, errorSql };
};
