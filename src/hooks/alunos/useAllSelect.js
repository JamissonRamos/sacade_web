import { useEffect, useState, useCallback } from "react";
import { useServeDb } from "../serverDb";

export const useAllRegistrations = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorSql, setErrorSql] = useState(null);
    const [alunos, setAlunos] = useState(() => {
        const savedAlunos = localStorage.getItem('alunos');
        return savedAlunos ? JSON.parse(savedAlunos) : [];
    });

    const fetchAlunos = useCallback(async () => {
        setIsLoading(true);
        setErrorSql(null);
        try {
            const data = await useServeDb.useServerDbAllSelect('http://localhost:3000/alunos');
            setAlunos(data);
            localStorage.setItem('alunos', JSON.stringify(data));
        } catch (error) {
            console.error('Erro ao buscar os dados dos alunos:', error);
            setErrorSql('Erro em Alunos:' + error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        const savedAlunos = localStorage.getItem('alunos');
        if (!savedAlunos) {
            fetchAlunos();
        }
    }, [fetchAlunos]);

    return { alunos, isLoading, errorSql };
};
