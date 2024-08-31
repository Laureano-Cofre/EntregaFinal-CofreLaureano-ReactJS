import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
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
          <ItemCount stock={producto.stock} agregarAlCarrito={() => console.log('Agregar al carrito')} />
        </li>
      </ul>
    </div>
  );
}

export default ItemDetail;
