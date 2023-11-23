import {useSelector , useDispatch} from "react-redux"
import CartItem from "./CartItem";
import { clearCart } from "../store/cartSlice";

const CartContainer = () => {
  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()
  console.log(cartItems)
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>{cartItems.map((cart)=>{return <CartItem key={cart.id} cart = {cart}/>})}</div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>total</h4>
        </div>
        <button className="btn clear-btn" onClick={()=>dispatch(clearCart())}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer;
