import './App.css';
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';

function App() {
  return ( 
    <BrowserRouter>
    <CartProvider>
      <NavBar /> 

      <Routes>
        <Route path="/" element={<ItemListContainer />} /> 
        <Route path="/categoria/:idCategoria" element={<ItemListContainer />} /> 
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} /> 
      </Routes>  

      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
