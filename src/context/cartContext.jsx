import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(producto, count) {
    let itemAlreadyInCart = cart.findIndex(
      (itemsInCart) => itemsInCart.id === producto.id
    );

    let newCart = [...cart];

    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart);
    } else {
      producto.count = count;
      newCart.push(producto);
      setCart(newCart);
    }
  }

  function itemsInCart() {
    // Total de items en carrito.
    let totalCart = 0;
    cart.forEach((itemsInCart) => (totalCart = totalCart + itemsInCart.count));
    return totalCart;
  }

  function clearCart() {
    //
  }

  function removeItem(idRemove) {
    // solo pasar el id y utilizar un filter.
    // cart.filter > filtrar todos los items con un id diferente a IDremove.
  }

  function priceInCart() {
    // precio total de la compra.
    let totalPrice = 0;
    cart.forEach(
      (producto) =>
        (totalPrice = totalPrice + producto.price * producto.cantidad)
    );
    return totalPrice;
  }

  return (
    <cartContext.Provider
      value={{
        addToCart,
        itemsInCart,
        cart,
        clearCart,
        removeItem,
        priceInCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
