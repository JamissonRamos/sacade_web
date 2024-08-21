import React, { useCallback } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../servece/firebase/config';

export const useFirebaseCreate = (collection) => {
    // const auth = getAuth();

    const firebaseCreate = useCallback(async (data) => {
        try {
            const {uid, ...otherData } = data;
            // Validate email and password using Firebase Auth  
            console.log(otherData)
            // Now, store additional user details in Firestore
            const docRef = doc(db, collection, uid);
            await setDoc(docRef, {
                uid: uid,
                ...otherData
            });     
            return uid;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }, [collection]);
    return { firebaseCreate };
};