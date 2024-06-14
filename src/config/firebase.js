import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5vItui_N2-saAGNQwUvGorn3oKKhf0XM",
  authDomain: "app-rede-feminina.firebaseapp.com",
  projectId: "app-rede-feminina",
  storageBucket: "app-rede-feminina.appspot.com",
  messagingSenderId: "387283554184",
  appId: "1:387283554184:web:9a995c847aa8577968b43d"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);