import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { createOrder } from "../Services/firestore";
// importamos solamente el "cartContext". El "cartContextProvider" se importa en App.js.
import MyButton from "../MyButton/MyButton";
import "./cartView.css";

function CartView() {
  const { cart, removeItem, clearCart, priceInCart } = useContext(cartContext);

  if (cart.length === 0) return <h1>Carrito vacío</h1>;

  function handleCheckout(evt) {
    const order = {
      buyer: {
        name: "Santiago",
        email: "santiago@bragone.com.ar",
        phone: "44449329",
      },
      items: cart,
      total: 0,
      date: new Date(),
    };
    createOrder(order);
  }

  return (
    <div>
      <h1 className="animate__animated animate__bounce">
        Productos en el carrito
      </h1>
      {cart.map((item) => (
        <div key={item.id}>
          <hr />
          <div className="cartViewImgFlex">
            <img className="cartViewImg" src={item.image} />
            <div className="containerCartView">
              <h2>{item.title}</h2>
              <h5>Precio: U$S {item.price}</h5>
              <h5>Items: {item.count}</h5>
              <MyButton OnTouchButton={() => removeItem(item.id)}>
                Quitar
              </MyButton>
            </div>
          </div>
        </div>
      ))}
      <hr />
      <div className="containerCartViewButton">
        <MyButton OnTouchButton={handleCheckout}>Finalizar compra</MyButton>
        <MyButton OnTouchButton={() => clearCart()}>Vaciar carrito</MyButton>
      </div>
    </div>
  );
}

export default CartView;
