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

  console.log(carrito)

  return (
    <CartContext.Provider value={{ carrito, agregarProducto, cantidadTotal }}>
      {children}
    </CartContext.Provider>
  );
};
