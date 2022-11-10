import * as React from "react";
import "./itemDetailContainer.css";

function ItemDetail({ producto }) {
  return (
    <div className="row container-fluid h-100 d-flex align-items-center justify-content-center">
      <div className="container cardDetail text-center">
        <div className="card-body">
          <h1 className="card-textDetail">{producto.title}</h1>
          <img className="imgCardDetail" src={producto.image}></img>
          <h5 className="card-textDetail">{producto.description}</h5>
          <h3 className="card-textDetail">U$S {producto.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
