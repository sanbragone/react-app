import * as React from "react";
import "./itemListContainer.css";
import Item from "./Item";

const ItemListContainer = (props) => (
  <div>
    <h1>{props.greeting}</h1>
    <div className="cards">
      <Item
        imgurl="/img/cremaExfoliante.jpg"
        producto="Crema Exfoliante"
        precio={8750}
      />
      <Item
        imgurl="/img/oleoOrganico.jpg"
        producto="Oleo Organico"
        precio={4677}
      />
      <Item 
        imgurl="/img/cremaCara.jpg" 
        producto="Crema Cara" 
        precio={2322} 
      />
            <Item 
        imgurl="/img/cremaPiel.jpg" 
        producto="Crema Cara" 
        precio={3847} 
      />
            <Item 
        imgurl="/img/aceitePiel.jpg" 
        producto="Crema Cara" 
        precio={1283} 
      />
    </div>
  </div>
);

export default ItemListContainer;
