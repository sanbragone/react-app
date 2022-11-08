import * as React from "react";
import "./itemDetailContainer.css";

const ItemDetail = (props) => (
  <div className="container card text-center">
      <div className="card-body">
        <img className="imgCard" src={props.image}></img>
        <h5 className="card-text">{props.title}</h5>
        <p className="card-text">U$S {props.price}</p>
      </div>
  </div>
);

export default ItemDetail;