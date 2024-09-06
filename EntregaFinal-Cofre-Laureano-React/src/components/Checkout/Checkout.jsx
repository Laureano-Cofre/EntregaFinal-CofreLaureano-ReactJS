import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import "./Checkout.css";

const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [formData, setFormData] = useState({ nombre: '', telefono: '', email: '' });
  const [notification, setNotification] = useState('');

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCheckout = () => {

    vaciarCarrito();

    setNotification("¡Gracias por tu compra! Nos pondremos en contacto contigo por correo electrónico para finalizar los detalles.");

    setTimeout(() => setNotification(''), 3000);
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
      

      <form onSubmit={(e) => { e.preventDefault(); handleCheckout(); }}>
        <div>
          <label>
            Nombre:
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChangeInput} required />
          </label>
        </div>
        <div>
          <label>
            Teléfono:
            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChangeInput} required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChangeInput} required />
          </label>
        </div>
        <button type="submit">Finalizar Compra</button>
      </form>
      

      {notification && <div className="notification">{notification}</div>}
    </div>
  );
};

export default Checkout;
