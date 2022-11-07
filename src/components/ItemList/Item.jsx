import * as React from "react";
import "./itemListContainer.css";

const Item = (props) => (
  <div className="container card text-center">
      <div className="card-body">
        <img className="imgCard" src={props.image}></img>
        <h5 className="card-text">{props.title}</h5>
        <p className="card-text">U$S {props.price}</p>
        <button>Ver más</button>
      </div>
  </div>
);

export default Item;
