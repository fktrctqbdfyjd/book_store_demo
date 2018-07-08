import React from "react";
import CartItem from "./CartItem";

const Cart = props => (
  <div>
    <h1>your cart</h1>
    {props.cartItems.map((cartItem, i) => (
      <CartItem
        title={cartItem.title}
        description={cartItem.description}
        rating={cartItem.rating}
        key={i}
        handleRemoveFromCart={props.handleRemoveFromCart}
      />
    ))}
    <form>
      <button type="button" onClick={props.handleOpenCheckout}>
        checkout
      </button>
    </form>
  </div>
);

export default Cart;
