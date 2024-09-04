import React, { createContext, useState } from 'react';

// Crear contexto
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto) => {
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {
      setCarrito(
        carrito.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + producto.cantidad }
            : item
        )
      );
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const eliminarProducto = (idProducto) => {
    setCarrito(carrito.filter(item => item.id !== idProducto));
  };

  const aumentarCantidad = (idProducto) => {
    setCarrito(
      carrito.map(item =>
        item.id === idProducto
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  const disminuirCantidad = (idProducto) => {
    setCarrito(
      carrito.map(item =>
        item.id === idProducto && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  const cantidadTotal = () => {
    return carrito.reduce((total, productoCarrito) => total + productoCarrito.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((total, productoCarrito) => total + (productoCarrito.cantidad * productoCarrito.precio), 0);
  };

  return (
    <CartContext.Provider value={{ carrito, agregarProducto, eliminarProducto, aumentarCantidad, disminuirCantidad, cantidadTotal, precioTotal }}>
      {children}
    </CartContext.Provider>
  );
};
