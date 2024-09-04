import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import "./Cart.css"

const Cart = () => {
  const { carrito, precioTotal } = useContext(CartContext);

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
          </li>
        </ul>
      ))}
      <h2>Precio Total: ${precioTotal()}</h2>
      <Link to="/checkout">
        <button>Ir a Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
