import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../config/firebase";
import { responseUtil } from "../util/response";

export const createUser = async (data) => {
    try {
        const docRef = collection(db, "Usuario")
        const response = await addDoc(docRef, {
            ...data,
            gyms: []
        })

        return responseUtil(true, response, "Sucesso!");
    } catch (error) {
        return responseUtil(false, error, "Ocorreu um erro ao cadastrar usuário!");
    }
}


export const getUser = async (data) => {
    try {
        const docRef = collection(db, "Usuario")
        const q = query(docRef, where("uid", "==", data["uid"]))
        const querySnapshot = await getDocs(q)

        if (querySnapshot.empty) {
            console.log("No matching documents found");
            return responseUtil(error, "Ocorreu um erro ao cadastrar usuário!", false);
        }

        const userData = { ...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id };
        return responseUtil(true, userData, "Sucesso!");
    } catch (error) {
        return responseUtil(false, error, "Ocorreu um erro ao cadastrar usuário!");
    }
}
