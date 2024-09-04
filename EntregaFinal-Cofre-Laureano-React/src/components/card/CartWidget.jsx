import './CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <Link to="/cart">
      <div className="cart-widget">
        <FaShoppingCart size={25} color="black" />
        <p>{cantidadTotal()}</p>
      </div>
    </Link>
  );
}

export default CartWidget;
