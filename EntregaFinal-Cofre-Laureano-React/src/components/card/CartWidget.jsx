import './CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={25} color="black" />
      <p>1</p>
    </div>
  );
}

export default CartWidget;
