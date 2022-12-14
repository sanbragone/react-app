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

// export async function getItemsOrdered() {
//   const colectionProductsRef = collection(DB, "products");
//   const q = query(colectionProductsRef, orderBy("index"), limit(10));

//   const documentSnapshot = await getDocs(q);

//   const documentsData = documentSnapshot.docs.map((doc) => {
//     return {
//       ...doc.data(),
//       id: doc.id,
//     };
//   });

//   return documentsData;
// }

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
  console.log("El ID de la compra es:", docOrder.id);
  return docOrder.id;
}

export async function exportToFirestore() {
  const products = [
    {
      id: 1,
      title: "Exfoliante facial",
      price: 109.95,
      discount: "25%",
      category: "rostro",
      image: "/img/cremaExfoliante.jpg",
      stock: 120,
      description:
        "Consigue eliminar las c??lulas muertas y las impurezas cut??neas realizando una limpieza profunda en la piel",
    },
    {
      id: 2,
      title: "Serum org??nico",
      price: 122.35,
      category: "cuerpo",
      image: "/img/oleoOrganico.jpg",
      stock: 394,
      description:
        "Ayuda a mejorar las propiedades regenerativas y curativas de la piel",
    },
    {
      id: 3,
      title: "Crema facial",
      price: 150.99,
      category: "rostro",
      image: "/img/cremaCara.jpg",
      stock: 323,
      description: "Ayuda a mantener la humedad y elasticidad de tu piel",
    },
    {
      id: 4,
      title: "Crema corporal",
      price: 150.99,
      discount: "15%",
      category: "cuerpo",
      image: "/img/cremaPiel.jpg",
      stock: 323,
      description:
        "Producto dermocosm??tico que se ha ideado para combatir la sequedad de la piel",
    },
    {
      id: 5,
      title: "Serum para piel",
      price: 195.11,
      category: "cuerpo",
      image: "/img/aceitePiel.jpg",
      stock: 387,
      description:
        "Ideal para un tratamiento hidratante con ingredientes activos y una textura l??quida que favorecen una r??pida y m??s profunda absorci??n",
    },
    {
      id: 6,
      title: "Crema nocturna",
      price: 168.47,
      category: "noche",
      image: "/img/cremaBlancaAcolchado.jpg",
      stock: 329,
      description:
        "Dormir es la mejor cura de belleza ya que durante la fase de sue??o profundo la piel se regenera",
    },
    {
      id: 7,
      title: "Crema CBD",
      price: 96.99,
      category: "noche",
      image: "/img/cremaCBD.jpg",
      stock: 223,
      description:
        "Nos permite aportar un extra de hidrataci??n a la piel, favorece la regeneraci??n de c??lulas muertas y proporciona nutrientes que la fortalecen y le dan tonicidad",
    },
    {
      id: 8,
      title: "Crema en kit duo",
      price: 103.99,
      discount: "45%",
      category: "cuerpo",
      image: "/img/cremaConjuntoDos.jpg",
      stock: 299,
      description:
        "Crema de textura suave y aireada que combina la sensaci??n de frescura y suavidad con un agradable aroma frutal",
    },
    {
      id: 9,
      title: "Crema para manos",
      price: 64.34,
      category: "manos",
      image: "/img/cremaConMano.jpg",
      stock: 126,
      description:
        "Es un complemento de belleza esencial, sobre todo en los d??as m??s fr??os ya que se pueden generar asperezas y grietas en la piel",
    },
    {
      id: 10,
      title: "Gel de ducha",
      price: 109.34,
      category: "bano",
      image: "/img/cremaDosBanera.jpg",
      stock: 355,
      description:
        "Disfrut?? de un ba??o placentero con nuestro gel de ducha premium",
    },
    {
      id: 11,
      title: "Crema gotero",
      price: 109.23,
      category: "manos",
      image: "/img/cremaGotero.jpg",
      stock: 588,
      description:
        "Crema en dosis de gotas para aplicar directamente sobre las arrugas",
    },
    {
      id: 12,
      title: "Jab??n para manos",
      price: 114.23,
      category: "manos",
      image: "/img/cremaGoteroBlanco.jpg",
      stock: 193,
      description:
        "Ayuda a ahorrar jab??n dando la cantidad necesaria para un correcto lavado de manos, impidiendo malgastar de m??s",
    },
    {
      id: 13,
      title: "Crema gotero pack",
      price: 599.45,
      category: "manos",
      image: "/img/cremaGoteroCuatro.jpg",
      stock: 129,
      description:
        "Kit de cremas en dosis de gotas para aplicar directamente sobre las arrugas",
    },
    {
      id: 14,
      title: "Crema manos",
      price: 199.99,
      category: "manos",
      image: "/img/cremaLibro.jpg",
      stock: 453,
      description:
        "Ayuda tanto para el cuidado a corto como a largo plazo de la salud y la vitalidad de su piel",
    },
    {
      id: 15,
      title: "Crema para sol",
      price: 156.99,
      category: "exterior",
      image: "/img/cremaNaranjaDos.jpg",
      stock: 188,
      description:
        "La crema solar es un producto que permite absorber y bloquear la radiaci??n ultravioleta (UV) del sol",
    },
    {
      id: 16,
      title: "Crema para exterior",
      price: 129.95,
      category: "exterior",
      image: "/img/cremaNaranjaFruta.jpg",
      stock: 233,
      description:
        "El protector solar, bloqueador solar, crema de sol o crema solar es una loci??n, gel, aerosol u otro t??pico que evita o disminuye los efectos causados por la radiaci??n solar",
    },
    {
      id: 17,
      title: "Crema para peinar",
      price: 139.99,
      category: "cabello",
      image: "/img/cremaPeine.jpg",
      stock: 398,
      description:
        "Consistencia espesa y textura suave que acondiciona el cabello despu??s del lavado",
    },
    {
      id: 18,
      title: "Kit de cremas",
      price: 349.85,
      category: "cuerpo",
      image: "/img/cremasConjunto.jpg",
      stock: 323,
      description:
        "Contiene la gama completa de productos: la crema de d??a, la crema de noche, el s??rum y la crema All in one. Todas estas cremas son aptas para todo tipo de pieles, incluidas las m??s sensibles y delicadas",
    },
    {
      id: 19,
      title: "Kit crema facial",
      price: 437.95,
      category: "rostro",
      image: "/img/cremaTres.jpg",
      stock: 345,
      description:
        "Kit de crema facial para hidratar de la mejor manera tu rostro",
    },
    {
      id: 20,
      title: "Crema para sol premium",
      price: 222.99,
      category: "exterior",
      image: "/img/cremaVioleta.jpg",
      stock: 188,
      description:
        "Cuando sale el sol, todo el mundo quiere salir y divertirse. Usar protecci??n solar significa que pod??s hacerlo sabiendo que tu piel est?? en buenas manos",
    },
  ];

  const collectionRef = collection(DB, "products");

  for (let item of products) {
    delete item.id;
    let docOrder = await addDoc(collectionRef, item);
    console.log("Documento credo, id:", docOrder);
  }
}
