import * as React from "react";
import "./itemListContainer.css";

const Item = (props) => (
  <div className="container card text-center">
    <div className="row row-cols-4">
      <div class="card-body">
        <img className="imgCard" src={props.imgurl}></img>
        <h5 className="card-text">{props.producto}</h5>
        <p className="card-text">${props.precio}</p>
      </div>
    </div>
  </div>
);

export default Item;
