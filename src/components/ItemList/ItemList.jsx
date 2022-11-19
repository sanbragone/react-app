import React from "react";
import Item from "./Item";

function ItemList({ productos }) {
  return (
    <div>
      <h1>Nuestros productos</h1>
      <div className="row container-fluid h-100 d-flex align-items-center justify-content-center itemDetailContainer">
        {productos.map((producto) => {
          return (
            <Item
              key={producto.id}
              id={producto.id}
              title={producto.title}
              image={producto.image}
              price={producto.price}
              discount={producto.discount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;
