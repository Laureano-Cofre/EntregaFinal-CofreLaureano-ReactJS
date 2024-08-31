import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
    const { carrito } = useContext(CartContext)

  return (
    <div>
        {
            carrito.map ( ( productoCarrito) => (
                <li>
                    <p>{productoCarrito.titulo}</p>
                </li>
            ))
        }
    </div>
  )
}

export default Cart