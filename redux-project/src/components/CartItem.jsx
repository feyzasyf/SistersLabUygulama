import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement } from '../store/cartSlice';

const CartItem = ({cart}) => {
  const {title , img , price , amount} = cart
  
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          //remove item
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={increment}
          //toggleItem
        >
          increase
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          
        >
         decrease
        </button>
      </div>
    </article>
  );
};

export default CartItem;
