import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { useEffect } from "react";
import { clearCart, calculateTotals } from "../store/cartSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  console.log(cartItems);
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((cart) => {
          return <CartItem key={cart.id} cart={cart} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>total: {total} </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
