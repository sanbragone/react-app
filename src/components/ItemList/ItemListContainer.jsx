import * as React from "react";
import { useState } from "react";
import "./itemListContainer.css";
import getItems from "../Services/mockService";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";

//Funcion para renderizar los productos que traigo del array en data.js

function ItemListContainer() {
  //Genero variable con array vacio.
  const [products, setProducts] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getItems(id).then((respuestaConDatos) => {
      setProducts(respuestaConDatos);
    });
  }, [id]);

  return products ? <ItemList products={products} /> : <Loader />;
}

export default ItemListContainer;
