// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  query,
  orderBy,
  limit,
  doc,
  addDoc,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCz004FMXvxqRQK23kQGqReLg78ma0Wn3c",
  authDomain: "react-app-coderhouse-44146.firebaseapp.com",
  projectId: "react-app-coderhouse-44146",
  storageBucket: "react-app-coderhouse-44146.appspot.com",
  messagingSenderId: "1091986270490",
  appId: "1:1091986270490:web:091a880c7221ef2e0ba4a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

// Traemos los documentos

export default async function getItems() {
  const collectionProductsRef = collection(DB, "products");
  const documentSnapshot = await getDocs(collectionProductsRef);
  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

export async function getItemsOrdered() {
  const colectionProductsRef = collection(DB, "products");
  const q = query(colectionProductsRef, orderBy("index"), limit(10));

  const documentSnapshot = await getDocs(q);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return documentsData;
}

// Traemos un Documento por su ID

export async function getSingleItem(idParams) {
  const docRef = doc(DB, "products", idParams);
  const docSnapshot = await getDoc(docRef);
  const itemData = docSnapshot.data();
  itemData.id = docSnapshot.id;
  return itemData;
}

export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products");
  const queryCat = query(
    collectionRef,
    where("category", "==", categoryParams)
  );

  const documentSnapshot = await getDocs(queryCat);
  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return documentsData;
}

// Enviamos la orden a Firebase.
export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");
  const docOrder = await addDoc(collectionRef, order);
  console.log(docOrder.id);
}
  