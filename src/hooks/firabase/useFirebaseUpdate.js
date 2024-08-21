import { db } from "../../servece/firebase/config";   // Assumindo que você já exportou sua instância do Firestore aqui
import { doc, updateDoc } from "firebase/firestore";

export const useFirebaseUpdate = async (collection, newData) => {
    try {
        // Atualizar outros dados na coleção de usuários no Firestore
        const userRef = doc(db, collection, newData.id);
        await updateDoc(userRef, newData);
        return {success: true}
    } catch (error) {
        console.error('Erro ao tenta atualizar os dados: ', error);
        throw error;  // Re-throw the error to handle it in the calling function
    } 

}

