import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "../config/firebase"
import { responseUtil } from "../util/response"
import { uploadFile } from "./storage";
import 'firebase/storage';

export class ProductService {
    static async create() {
        return ""
    }

    static async exclude() {
        return ""
    }

    static async save() {
        return ""
    }

    static async inativate() {
        return ""
    }
}

export const getProducts = async () => {
    try {
        const docRef = collection(db, "produto")
        const q = query(docRef, where("status", "in", [1, 2]))
        const response = await getDocs(q)

        const data = response.docs.map(item => ({ ...item.data(), id: item.id }))

        return responseUtil(true, "", data)
    } catch (error) {
        return responseUtil(false, "Ocorreu um erro ao buscar produtos!", error)
    }
}

export const insertProduct = async (data) => {
    try {
        let imgRes
        if (data["img"]) {
            imgRes = await uploadFile(data["img"], "foto")
        }

        data["status"] = 1

        const docRef = collection(db, "produto")
        const response = await addDoc(docRef, {
            ...data,
            img: imgRes.data
        })
        return responseUtil(true, "Sucesso!", response);
    } catch (error) {
        console.log(error)
        return responseUtil(false, "Ocorreu um erro ao cadastrar usuário!", error);
    }
}

export const updateProduct = async (data) => {
    try {
        let imgRes
        if (data["img"]) {
            imgRes = await uploadFile(data["img"], "foto")
        }

        const docRef = doc(db, "produto", data["id"])
        const response = await updateDoc(docRef, {
            ...data,
        })
        return responseUtil(true, "Sucesso!", response);
    } catch (error) {
        console.log(error)
        return responseUtil(false, "Ocorreu um erro ao cadastrar usuário!", error);
    }
}