import products from "../../data/data";

// Funcion para simular un backend, la cual trae nuestro array de productos.
function getItems(id) {
  return new Promise((resolve) => {
    if (id === undefined) {
      //Agrego una demora en la ejecucion de la funcion.
      setTimeout(() => {
        resolve(products);
      }, 2000);
    } else {
      let itemsRequeridos = products.filter((item) => item.category === id);
      setTimeout(() => {
        resolve(itemsRequeridos);
      }, 2000);
    }
  });
}

// Funcion para simular un backend, la cual trae nuestro array de productos. Esta la utilizo para buscar un item en particular en el array.
export function getItemDetail(idParametro) {
  return new Promise((resolve, reject) => {
    // Buscamos un item dentro del array con el metodo "find"
    let itemRequerido = products.find(
      (item) => item.id === Number(idParametro)
    );

    // Condicional para el reject
    if (itemRequerido === undefined) reject("Item no encontrado.");

    //Agrego una demora en la ejecucion de la funcion.
    setTimeout(() => {
      resolve(itemRequerido);
    }, 2000);
  });
}

export default getItems;