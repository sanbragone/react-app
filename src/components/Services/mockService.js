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

export default getItems;
