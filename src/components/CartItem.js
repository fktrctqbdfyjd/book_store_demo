import React from "react";

const CartItem = props => {
  const { title, description, rating } = props;
  const handleRemoveFromCart = () => {
    props.handleRemoveFromCart(props);
  };
  return (
    <div>
      <h6>{title}</h6>
      <p>{description}</p>
      <p>{rating}</p>
      <button type="button" onClick={handleRemoveFromCart}>
        remove
      </button>
    </div>
  );
};

export default CartItem;
