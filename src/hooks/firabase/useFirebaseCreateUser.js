import React, { useCallback } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from '../../servece/firebase/config';

export const useFirebaseCreateUser = (collection) => {
    const auth = getAuth();

    const firebaseCreateUser = useCallback(async (email, password) => {
        try {
           // const { email, password, ...otherData } = data;
            // Validate email and password using Firebase Auth
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);            
            const user = userCredential.user;    
            // console.log(otherData)
            // // Now, store additional user details in Firestore
            // const docRef = doc(db, collection, user.uid);
            // await setDoc(docRef, {
            //     uid: user.uid,
            //     ...otherData
            // });     
            return user.uid;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }, [auth]);
    return { firebaseCreateUser };
};