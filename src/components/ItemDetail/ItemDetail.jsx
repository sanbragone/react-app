import * as React from "react";
import "./itemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";
//Importo Toastify para los alerts.
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function ItemDetail({ producto }) {
  function onAddToCart(count) {
    alert(`Agregaste ${count} itema al carrito!`);
  }

  return (
    <div className="row container-fluid h-100 d-flex align-items-center justify-content-center">
      <div className="container cardDetail text-center">
        <div className="card-body">
          <h1 className="card-textDetail">{producto.title}</h1>
          <img className="imgCardDetail" src={producto.image}></img>
          <h5 className="card-textDetail">{producto.description}</h5>
          <h3 className="card-textDetail">U$S {producto.price}</h3>
          <ItemCount onAddToCart={onAddToCart} stock={producto.stock} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
