import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { getDocumentWhereUID, storeDocument } from "../lib/firebase";
import { responseUtil } from "../util/response";
import { db } from "../config/firebase";

export class UserService {
    static createUser = async (data) => {
        return await storeDocument("usuario", data)
    }

    static getUser = async (data) => {
        return await getDocumentWhereUID("usuario", data["uid"])
    }
}

export const createUser = async (data) => {
    try {
        console.log(data)
        const docRef = collection(db, "usuario")
        const response = await addDoc(docRef, {
            ...data,
        })

        return responseUtil(response, "Sucesso!", true);
    } catch (error) {
        console.log('error')
        console.log(error)
        return responseUtil(error, "Ocorreu um erro ao cadastrar usuário!", false);
    }
}

export const getUser = async (data) => {
    try {
        const docRef = collection(db, "usuario")
        const q = query(docRef, where("uid", "==", data["uid"]))
        const querySnapshot = await getDocs(q)

        if (querySnapshot.empty) {
            return responseUtil(false, "Ocorreu um erro ao buscar usuário!", []);
        }

        const userData = { ...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id };
        return responseUtil(true, "Sucesso!", userData);
    } catch (error) {
        console.log(error)
        return responseUtil(false, "Ocorreu um erro ao buscar usuário!", error);
    }
}


export const getAllUsers = async () => {
    try {
        const docRef = collection(db, "usuario")
        const q = query(docRef, where("admin", "in", [0, null]))
        const querySnapshot = await getDocs(q)

        if (querySnapshot.empty) {
            return responseUtil(false, "Ocorreu um erro ao buscar usuários!", []);
        }

        const users = querySnapshot.docs.map(item => ({...item.data(), id:item.id}))
        return responseUtil(true, "Sucesso!", users);
    } catch (error) {
        console.log(error)
        return responseUtil(false, "Ocorreu um erro ao buscar usuários!", error);
    }
}