import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz0oA_FJFnQd9hHNIHJetTGhcpw0m0kYU",
  authDomain: "chemicalwala-3fd32.firebaseapp.com",
  projectId: "chemicalwala-3fd32",
  storageBucket: "chemicalwala-3fd32.firebasestorage.app",
  messagingSenderId: "741121329946",
  appId: "1:741121329946:web:d7b9f317ff7b22879c7aa3",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();