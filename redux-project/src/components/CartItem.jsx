import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "../store/cartSlice";
import { ChevronDown, ChevronUp } from "../icons";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();
  console.log(cart);
  const { title, img, price, amount, id } = cart;

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increment(id))}
          //toggleItem
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button className="amount-btn" onClick={() => dispatch(decrement(id))}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
