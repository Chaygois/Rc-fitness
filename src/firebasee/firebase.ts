// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDOtL1aEWw-Qmi8sJ1vBNbCxeuRrO3O8p8",
  authDomain: "balmy-moonlight-417317.firebaseapp.com",
  projectId: "balmy-moonlight-417317",
  storageBucket: "balmy-moonlight-417317.appspot.com",
  messagingSenderId: "636070615223",
  appId: "1:636070615223:web:e6be3359906a1b52611532",
  measurementId: "G-QZM714B4RL",
};

// Inicializando Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Provedor Google
const provider = new GoogleAuthProvider();

// Função para login com Google
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    return {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid: user.uid,
    };
  } catch (error) {
    console.error("Erro ao fazer login com o Google:", error);
    throw error;
  }
};

export { auth, signInWithGoogle };
