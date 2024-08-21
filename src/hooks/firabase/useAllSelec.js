import React, { useState, useCallback } from "react";
import { getAuth } from "firebase/auth";
import { getDocs, collection as firestoreCollection } from "firebase/firestore";
import { db } from '../../servece/firebase/config';

export const useFirebaseAllSelect = (collection) => {
    const [errorSql, setErrorSql] = useState(null);
    const [documents, setDocuments] = useState([]);
    const auth = getAuth();

    const allSelect = useCallback(async () => {
        setErrorSql(null);  
        try {
            const collectionRef = firestoreCollection(db, collection);
            const querySnapshot = await getDocs(collectionRef);

            const docsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));

            setDocuments(docsData);
            return docsData
        } catch (error) {
            console.error('Error ao busca registros: ', error);
            setErrorSql('Error ao tenta busca registros :  ' + error.message);
        }
    }, [collection]);

    return { allSelect, documents, errorSql };
};