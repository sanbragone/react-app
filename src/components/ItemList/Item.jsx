import * as React from "react";
import "./itemListContainer.css";
import { Link } from "react-router-dom";

function Item({ title, image, price, id }) {
  const urlDetail = `/item/${id}`;
  return (
    <div className="container card text-center">
      <div className="card-body">
        <img className="imgCard" src={image}></img>
        <h5 className="card-text">{title}</h5>
        <p className="card-text">U$S {price}</p>
        <Link to={urlDetail}>
          <button>Ver más</button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
