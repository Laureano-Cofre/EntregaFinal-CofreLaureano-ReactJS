// CartContext.jsx
import React, { createContext, useState } from 'react';

// Crear contexto
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);


  const agregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };


  const cantidadTotal = () => {
    const totalProductos = carrito.reduce ( ( total, productoCarrito) => total + productoCarrito.cantidad, 0)
    return totalProductos;
  };


  const precioTotal = () => {
    const precio = carrito.reduce( (total, productoCarrito) => total + ( productoCarrito.cantidad * productoCarrito.precio), 0)
    return precio
  }

  const borrarProducto = 
  
  console.log(carrito)
  
  return (
    <CartContext.Provider value={{ carrito, agregarProducto, cantidadTotal, precioTotal }}>
      {children}
    </CartContext.Provider>
  );
};
