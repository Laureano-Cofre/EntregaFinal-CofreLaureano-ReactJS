import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const { carrito, precioTotal, aumentarCantidad, disminuirCantidad, eliminarProducto } = useContext(CartContext);

  return (
    <div>
      {carrito.map(productoCarrito => (
        <ul key={productoCarrito.id}>
          <li>
            <img src={productoCarrito.imagen} alt={productoCarrito.titulo} />
            <p>{productoCarrito.titulo}</p>
            <p>Banda: {productoCarrito.banda}</p>
            <p>Precio: ${productoCarrito.precio}</p>
            <p>Cantidad: {productoCarrito.cantidad}</p>
            <p>Precio Parcial: ${productoCarrito.cantidad * productoCarrito.precio}</p>
            <button onClick={() => aumentarCantidad(productoCarrito.id)}>+</button>
            <button onClick={() => disminuirCantidad(productoCarrito.id)}>-</button>
            <button onClick={() => eliminarProducto(productoCarrito.id)}>Eliminar</button>
          </li>
        </ul>
      ))}
      <h2>Precio Total: ${precioTotal()}</h2>
    </div>
  );
};

export default Cart;
