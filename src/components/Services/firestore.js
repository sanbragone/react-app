// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCz004FMXvxqRQK23kQGqReLg78ma0Wn3c",
  authDomain: "react-app-coderhouse-44146.firebaseapp.com",
  projectId: "react-app-coderhouse-44146",
  storageBucket: "react-app-coderhouse-44146.appspot.com",
  messagingSenderId: "1091986270490",
  appId: "1:1091986270490:web:091a880c7221ef2e0ba4a3",
  measurementId: "G-TWG9NRPEPC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const DB = getFirestore(app);

// Traemos los Documentos

export default async function getItems() {
  const collectionProducts = collection(DB, "products");
  const documentSnapshot = await getDocs(collectionProducts);
  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

// Traemos un Documento por su ID

export async function getItemDetail(idParams) {
  const docRef = doc(DB, "products", idParams);
  const docSnapshot = await getDoc(docRef);
  return {
    ...docSnapshot.data(),
    id: docSnapshot.id,
  };
}
