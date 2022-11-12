import React from "react";
import { useState } from "react";
import MyButton from "../MyButton/MyButton";
import "../MyButton/mybutton.css";

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div>
      <div>
        <MyButton onTouchButton={handleSubstract} className="btnText">-</MyButton>
        <span className="btnSpan">{count}</span>
        <MyButton onTouchButton={handleAdd} className="btnText">+</MyButton>
      </div>
      <div>
        <MyButton onTouchButton={() => onAddToCart(count)}>
          <p className="btnText">Agregar al carrito</p>
        </MyButton>
      </div>
    </div>
  );
}

export default ItemCount;
