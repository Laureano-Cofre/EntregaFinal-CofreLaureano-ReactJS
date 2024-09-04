import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Checkout.css"

const Checkout = () => {
  const { carrito, precioTotal } = useContext(CartContext);

  const handleCheckout = () => {
    alert("¡Gracias por tu compra! Nos pondremos en contacto contigo por correo electrónico para finalizar los detalles.");
  };

  return (
    <div>
      <h2>Resumen de la Compra:</h2>
      {carrito.map(productoCarrito => (
        <ul key={productoCarrito.id}>
          <li>
            <p>{productoCarrito.titulo} x {productoCarrito.cantidad}</p>
            <p>Precio: ${productoCarrito.precio}</p>
            <p>Subtotal: ${productoCarrito.cantidad * productoCarrito.precio}</p>
          </li>
        </ul>
      ))}
      <h2>Total a Pagar: ${precioTotal()}</h2>
      <button onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
};

export default Checkout;
