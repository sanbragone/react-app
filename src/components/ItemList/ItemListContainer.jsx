import * as React from "react";
import { useState } from "react";
import "./itemListContainer.css";
import Item from "./Item";
import getItems from "../Services/mockService";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

//Funcion para renderizar los productos que traigo del array en data.js

function ItemListContainer(props) {
  //Genero variable con array vacio.
  const [productos, setProductos] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getItems(id).then((respuestaConDatos) => {
      setProductos(respuestaConDatos);
    });
  }, [id]);

  return (
    <div>
      <h1>{props.greeting}</h1>
      <div className="row container-fluid h-100 d-flex align-items-center justify-content-center itemDetailContainer">
        {/* Utilizo el map para iterar dentro del array, para luego mostrar todas las cards.*/}
        {productos.map((producto) => {
          return (
            <Item
              key={producto.id}
              id={producto.id}
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