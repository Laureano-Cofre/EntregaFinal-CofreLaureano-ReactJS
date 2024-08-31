import './ItemListContainer.css';
import data from "../../data/data.json";
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        // Simular una llamada asíncrona para cargar los productos
        const respuesta = await new Promise((resolve) => {
          setTimeout(() => resolve(data), 1000);
        });

        if (idCategoria) {
          const productosFiltrados = respuesta.filter((producto) => producto.categoria === idCategoria);
          setProductos(productosFiltrados);
        } else {
          setProductos(respuesta);
        }
      } catch (error) {
        console.log(error);
      } finally {
        console.log("finalizó la promesa");
      }
    };

    obtenerProductos();
  }, [idCategoria]);

  return (
    <div className='catalogo'>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
