import './CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {saludo, saludando} = useContext(CartContext)

  return (
    <div onClick = {saludando} className="cart-widget">
      <FaShoppingCart size={25} color="black" />
      <p>{saludo}</p>
    </div>
  );
}

export default CartWidget;
