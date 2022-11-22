import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebNotFound from "./components/Error/WebNotFound";
import { CartContextProvider } from "./context/cartContext";
import CartView from "./components/CartView/CartView";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Nuestros productos" />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer detail="Detalle del producto" />}
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer detail="Detalle del producto" />}
          />
          <Route path="/cart" element={<CartView/>} />
          <Route path="*" element={<WebNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
