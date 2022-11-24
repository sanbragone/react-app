import * as React from "react";
import { useState } from "react";
import "./itemDetailContainer.css";
import { getItemDetail } from "../Services/mockService";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

//Funcion para renderizar los productos que traigo del array en data.js

function ItemDetailContainer(props) {
  //Genero variable con array vacio.
  const [producto, setProducto] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getItemDetail(id).then((respuestaConDatos) => {
      setProducto(respuestaConDatos);
      setisLoading(false);
    });
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
      <h1 className="animate__animated animate__bounce">{props.detail}</h1>
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContainer;
