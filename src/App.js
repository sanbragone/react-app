import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useParams} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Nuestros productos" />} />
        <Route path="/category/:id" element={<ItemListContainer detail="Detalle del producto" />} />
        <Route path="/item/:id" element={<ItemDetailContainer detail="Detalle del producto" />} />
        <Route path="*" element={<h1 className="h1">Web no encontrada</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
