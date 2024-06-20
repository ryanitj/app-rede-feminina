import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../config/firebase"
import { responseUtil } from "../util/response"

export const storeDocument = async (collection, data) => {
    try {
        const docRef = collection(db, collection)
        const response = await addDoc(docRef, {
            ...data,
        })
        return responseUtil(true, "Sucesso!", response);
    } catch (error) {
        return responseUtil(false, "Ocorreu um erro ao cadastrar usuário!", error);
    }
}

export const getDocumentWhereUID = async (collection, uid, condition = "==") => {
    try {
        const docRef = collection(db, collection)
        const q = query(docRef, where("uid", condition, uid))
        return await getDocs(q)
    } catch (error) {
        return []
    }
}