import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);

  const agregarAlCarrito = (cantidad) => {
    const productoCarrito = { ...producto, cantidad };
    agregarProducto(productoCarrito);
  };

  return (
    <div className='detail'>
      <img src={producto.imagen} alt={producto.titulo} />
      <ul className='detalles'>
        <li>
          <h3>{producto.titulo}</h3>
        </li>
        <li>
          <p>{producto.banda}</p>
        </li>
        <li>
          <p className="precioProducto">Precio: ${producto.precio}</p>
        </li>
        <li>
          <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
        </li>
      </ul>
    </div>
  );
}

export default ItemDetail;
