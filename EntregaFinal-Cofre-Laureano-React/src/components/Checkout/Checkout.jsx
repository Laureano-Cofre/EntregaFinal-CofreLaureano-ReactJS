import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
  const { carrito, precioTotal } = useContext(CartContext);

  const handleCheckout = () => {
    // Aquí puedes implementar la lógica para procesar el pago
    alert("Compra realizada con éxito!");
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
