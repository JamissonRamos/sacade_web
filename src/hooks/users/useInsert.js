import { useState, useCallback } from "react";
// import { useServeDb } from "../serverDb";
import { useFirabaseCustom } from "../firabase";

export const useCreateUser = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorSql, setErrorSql] = useState(null);

    const collection = 'users'
    const {firebaseCreateUser} = useFirabaseCustom.useFirebaseCreateUser(collection);
    const {firebaseCreate} = useFirabaseCustom.useFirebaseCreate(collection);

    const createUser = useCallback(async (userData) => {
        // Remover o atributo email
        const { email, password, ...rest } = userData;

        setIsLoading(true);
        setErrorSql(null);
       
        try {
            const newUserId = await firebaseCreateUser(email, password); 

            const newUerUidData = {
                uid: newUserId,    
                ...rest
            }

            const newUserCollection = await firebaseCreate(newUerUidData); 

            const existingUsers = JSON.parse(localStorage.getItem(collection)) || [];
            // Adiciona o novo ID como o primeiro elemento do objeto
           

            console.log('email: ', email);
            console.log('password: ', password);
            console.log('rest: ', rest);
            console.log('resp Novo Cadastro Coleção: ', newUserCollection);
            console.log('Novo obj id data user: ', newUerUidData);
            
            // userData = {
            //     id: newUser,
            //     ...userData
            // }
            const updatedUsers = [...existingUsers, newUerUidData];            
            localStorage.setItem(collection, JSON.stringify(updatedUsers));
            return newUerUidData;
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setErrorSql('Este e-mail já está cadastrado. Tente outro.');
            }else{
                console.error('Erro ao criar o usuário2:', error);
                setErrorSql('Erro ao criar usuário3: ' + error.message);
            }

        } finally {
            setIsLoading(false);
        }
    }, [firebaseCreateUser, firebaseCreate ]);

    return { createUser, isLoading, errorSql };
};
