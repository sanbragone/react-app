import * as React from "react";
import { useState } from "react";
import "./itemListContainer.css";
import Item from "./Item";
import getItems from "../Services/mockService";
import { useEffect } from "react";

//Funcion para renderizar los productos que traigo del array en data.js

function ItemListContainer(props) {
  //Genero variable con array vacio.
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getItems().then((respuestaConDatos) => {
      setProductos(respuestaConDatos);
    });
  }, []);

  return (
    <div>
      <h1>{props.greeting}</h1>
      <div className="row container-fluid h-100 d-flex align-items-center justify-content-center">
        {/* Utilizo el map para iterar dentro del array, para luego mostrar todas las cards.*/}
        {productos.map((producto) => {
          return (
            <Item
              key={producto.id}
              title={producto.title}
              image={producto.image}
              price={producto.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItemListContainer;
