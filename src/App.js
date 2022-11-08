import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <div>
      <body>
        <header>
          <NavBar />
        </header>
        <main>
          <ItemListContainer greeting="Nuestros productos" />
          {/* <ItemDetailContainer/> */}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </div>
  );
}

export default App;
