import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, count) {
    let itemAlreadyInCart = cart.findIndex(
      (itemsInCart) => itemsInCart.id === product.id
    );

    let newCart = [...cart];

    if (itemAlreadyInCart !== -1) {
      newCart[itemAlreadyInCart].count += count;
      setCart(newCart);
    } else {
      product.count = count;
      newCart.push(product);
      setCart(newCart);
    }
  }

  // Total de items en carrito.
  function itemsInCart() {
    let totalCart = 0;
    cart.forEach((itemsInCart) => (totalCart = totalCart + itemsInCart.count));
    return totalCart;
  }

  // Funcion para vaciar carrito.
  function clearCart() {
    setCart([]);
  }

  function removeItem(idRemove) {
    // solo pasar el id y utilizar un filter.
    // cart.filter > filtrar todos los items con un id diferente a IDremove.
    const newCart = [...cart];
    newCart.pop();
    setCart(newCart);
  }

  function priceInCart() {
    // precio total de la compra.
    let totalPrice = 0;
    cart.forEach(
      (product) =>
        (totalPrice = totalPrice + product.price * product.count)
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
