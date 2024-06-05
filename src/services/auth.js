import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebase"
import { responseUtil } from "../util/response";
import { createUser } from "./users";

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);

        if(!response){
            return responseUtil(false, "Ocorreu um erro..", response)
        }

        return responseUtil(true, "Sucesso!", response)
    } catch (error) {
        return responseUtil(false, "Ocorreu um erro..", error)
    }
}

export const register = async (email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);

        if(!response){
            return responseUtil(false, "Ocorreu um erro..", response)
        }

        await createUser({
            "id":response.user.uid,
            "email":email,
        });

        return responseUtil(true, "Sucesso!", response)
    } catch (error) {
        return responseUtil(false, "Ocorreu um erro..", error)
    }
}