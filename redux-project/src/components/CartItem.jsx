import React from "react";

const CartItem = () => {
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
          //toggleItem
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          //decrease
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
