import React from "react";
import Item from "./Item";

function ItemList({ products }) {
  return (
    <div>
      <h1 className="animate__animated animate__bounce">Nuestros productos</h1>
      <div className="row container-fluid h-100 d-flex align-items-center justify-content-center itemDetailContainer">
        {products.map((product) => {
          return (
            <Item
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              discount={product.discount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItemList;