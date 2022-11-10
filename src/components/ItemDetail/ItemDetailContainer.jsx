import * as React from "react";
import { useState } from "react";
import "./itemDetailContainer.css";
import { getItemDetail } from "../Services/mockService";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";

//Funcion para renderizar los productos que traigo del array en data.js

function ItemDetailContainer(props) {
  //Genero variable con array vacio.
  const [producto, setProducto] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getItemDetail(id).then((respuestaConDatos) => {
      setProducto(respuestaConDatos);
    });
  }, []);

  return (
    <div>
      <h1>{props.detail}</h1>
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;
