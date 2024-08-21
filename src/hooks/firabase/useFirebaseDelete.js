import { db } from "../../servece/firebase/config";   // Assumindo que você já exportou sua instância do Firestore aqui
import { doc, deleteDoc } from "firebase/firestore";

export const useFirebaseDelete = async (collection, idData) => {
    try {
        // Atualizar outros dados na coleção de usuários no Firestore
        const userRef = doc(db, collection, idData);
        await deleteDoc(userRef, idData);
        return {success: true}
    } catch (error) {
        console.error('Erro ao tenta atualizar os dados: ', error);
        throw error;  // Re-throw the error to handle it in the calling function
    } 

}

