import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/firebase"

export class AuthService {
    static login = async (email, password) => {
       return await signInWithEmailAndPassword(auth, email, password);
    }
    
    static register = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    }
}