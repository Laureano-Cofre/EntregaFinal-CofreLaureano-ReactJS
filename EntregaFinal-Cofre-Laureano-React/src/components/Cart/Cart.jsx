import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
    const { carrito, precioTotal } = useContext(CartContext)

  return (
    <div>
        {
            carrito.map ( ( productoCarrito) => (                
                <ul>
                    <li>
                        <img src={productoCarrito.imagen} alt="" />
                        <p>{productoCarrito.titulo}</p>
                        <p>Banda: {productoCarrito.banda}</p>
                        <p>Precio: {productoCarrito.precio}</p>
                        <p>Cantidad: {productoCarrito.cantidad}</p>
                        <p>Precio Parcial: {carrito.cantidad * carrito.precio}</p>
                    </li>
                </ul>
            ))
        }

        <h2>Precio Total: {precioTotal()}</h2>
    </div>
  )
}

export default Cart