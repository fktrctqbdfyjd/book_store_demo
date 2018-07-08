import React from "react";
import CartItem from "./CartItem";

const Cart = props => {
  let totalPrice = 0;
  const price = props.cartItems.forEach(item => {
    totalPrice += parseInt(item.price);
    return totalPrice;
  });
  return (
    <div className="cart">
      <div className="cart__header">
        <h2 className="cart__title">your cart</h2>
        {props.cartItems.length > 0 && (
          <button className="btn--delete" onClick={props.handleRemoveAll}>
            remove all
          </button>
        )}
      </div>
      {props.cartItems.map((cartItem, i) => (
        <CartItem
          title={cartItem.title}
          price={cartItem.price}
          key={i}
          handleRemoveFromCart={props.handleRemoveFromCart}
        />
      ))}
      <form>
        <button
          className="btn--main"
          type="button"
          onClick={props.handleOpenCheckout}
        >
          checkout for {totalPrice} $
        </button>
      </form>
    </div>
  );
};

export default Cart;
