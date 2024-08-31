// ItemCount.jsx
import React, { useState } from 'react';
import "./ItemCount.css";

const ItemCount = ({ stock, agregarAlCarrito }) => {
  const [count, setCount] = useState(1);

  const aumentar = () => {
    setCount((prevCount) => {
      if (prevCount < stock) {
        return prevCount + 1;
      }
      return prevCount; 
    });
  };

  const disminuir = () => {
    setCount((prevCount) => {
      if (prevCount > 1) {
        return prevCount - 1;
      }
      return prevCount; 
    });
  };

  return (
    <div className='boton'>
      <button onClick={disminuir}>-</button>
      <p>{count}</p>
      <button onClick={aumentar}>+</button>
      <button onClick={() => agregarAlCarrito(count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
