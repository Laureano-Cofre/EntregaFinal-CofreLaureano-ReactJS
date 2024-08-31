import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className='producto'>
      <Link to={"/detalle/" + producto.id}>
        <img src={producto.imagen} alt={producto.titulo} />
        <h3>{producto.titulo}</h3>
        <p>{producto.banda}</p>
        <p className="precioProducto">Precio: ${producto.precio}</p>
      </Link>
      <Link to={"/detalle/" + producto.id}>
        <button>Más detalles</button>
      </Link>
    </div>
  );
}

export default Item;
