import * as React from "react";
import { useState } from "react";
import "./itemDetailContainer.css";
import { getItemDetail } from "../Services/mockService";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";

//Funcion para renderizar los productos que traigo del array en data.js

function ItemDetailContainer() {
  //Genero variable con array vacio.
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    getItemDetail().then((respuestaConDatos) => {
      setProducto(respuestaConDatos);
    });
  }, []);

  return (
    <div>
      <ItemDetail
        title={producto.title}
        image={producto.image}
        price={producto.price}
      />
    </div>
  );
}

export default ItemDetailContainer;
