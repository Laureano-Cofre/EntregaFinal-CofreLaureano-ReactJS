// CartWidget.jsx
import './CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div className="cart-widget">
      <FaShoppingCart size={25} color="black" />
      <p>{cantidadTotal()}</p> {}
    </div>
  );
}

export default CartWidget;
