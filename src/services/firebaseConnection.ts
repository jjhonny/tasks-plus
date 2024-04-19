import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjykKu_XK9ichiGsSTeMWNUnCfFkSNJK8",
  authDomain: "tarefas-plus-85858.firebaseapp.com",
  projectId: "tarefas-plus-85858",
  storageBucket: "tarefas-plus-85858.appspot.com",
  messagingSenderId: "115104030411",
  appId: "1:115104030411:web:a9e5ea47cd087d3c05054e",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
