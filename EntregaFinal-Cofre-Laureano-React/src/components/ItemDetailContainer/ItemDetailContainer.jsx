import React, { useState, useEffect } from 'react';
import data from '../../data/data.json';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { idProducto } = useParams();

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        // Simular una llamada asíncrona para cargar los productos
        const dataProductos = await new Promise((resolve) => {
          setTimeout(() => resolve(data), 1000);
        });

        const productoEncontrado = dataProductos.find((productoData) => productoData.id === idProducto);
        setProducto(productoEncontrado);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerProducto();
  }, [idProducto]);

  return (
    <ItemDetail producto={producto} />
  );
}

export default ItemDetailContainer;
