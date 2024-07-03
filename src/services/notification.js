import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { responseUtil } from "../util/response";
import { db } from "../config/firebase";


export const getAllNotifications = async (uid) => {
    try {
        const docRef = collection(db, "notificacao")
        const q = query(docRef, where("uid", "in", [uid]))
        const querySnapshot = await getDocs(q)

        if (querySnapshot.empty) {
            return responseUtil(false, "Ocorreu um erro ao buscar as notificações!", []);
        }

        const users = querySnapshot.docs.map(item => ({...item.data(), id:item.id}))
        return responseUtil(true, "Sucesso!", users);
    } catch (error) {
        console.log(error)
        return responseUtil(false, "Ocorreu um erro ao buscar as notificações!", error);
    }
}

export const createNotifications = async (usersArray) => {
    try {
        const docRef = collection(db, "notificacao")

        const res = await Promise.all(usersArray.map(async (item) => {
            await addDoc(docRef, {
                ...item,
            });
        }));

        return responseUtil(true, "Sucesso!", res);
    } catch (error) {
        console.log('error')
        console.log(error)
        return responseUtil(false, "Ocorreu um erro ao cadastrar usuário!", error);
    }
}