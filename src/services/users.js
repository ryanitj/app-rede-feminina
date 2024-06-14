import { getDocumentWhereUID, storeDocument } from "../lib/firebase";

export class UserService {
    static createUser = async (data) => {
        return await storeDocument("Usuario", data)
    }

    static getUser = async (data) => {
        return await getDocumentWhereUID("Usuario", data["uid"])
    }
}
