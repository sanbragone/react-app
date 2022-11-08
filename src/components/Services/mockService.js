import productos from "../../data/data";

// Funcion para simular un backend, la cual trae nuestro array de productos.
function getItems() {
  return new Promise((resolve) => {
    //Agrego una demora en la ejecucion de la funcion.
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
}

// Funcion para simular un backend, la cual trae nuestro array de productos. Esta la utilizo para buscar un item en particular en el array.
export function getItemDetail() {
  return new Promise((resolve) => {
    //Agrego una demora en la ejecucion de la funcion.
    setTimeout(() => {
      resolve(productos[10]);
    }, 2000);
  });
}

export default getItems;
