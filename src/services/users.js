import { addDoc } from "firebase/firestore"
import { db } from "../config/firebase";
import { responseUtil } from "../util/response";

export const createUser = async (user) => {
    try {
        const response = await addDoc(db, user);

        return responseUtil(true, "Sucesso!", response);
    } catch (error) {
        return responseUtil(false, "Ocorreu um erro..", response);
    }
}