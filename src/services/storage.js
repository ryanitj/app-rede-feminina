import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "../config/firebase";
import { responseUtil } from "../util/response";

const storage = getStorage(app);


export const uploadFile = async (file, name) => {
    try {
        const response = await fetch(file);
        const blob = await response.blob();
        const storageRef = ref(storage, name);
        
        const response2 = await uploadBytes(storageRef, blob)
        return responseUtil(true, "", await getDownloadURL(response2.ref));
    } catch (error) {
        
    }
}
