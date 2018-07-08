import React from "react";

const CartItem = props => {
  const { title, description, price } = props;
  const handleRemoveFromCart = () => {
    props.handleRemoveFromCart(props);
  };
  return (
    <div className="cart__item">
      <h3 className="cart__item--title">{title}</h3>
      <p className="cart__item--price">{price} $</p>
      <button
        className="cart__item--btn"
        type="button"
        onClick={handleRemoveFromCart}
      >
        remove
      </button>
    </div>
  );
};

export default CartItem;
