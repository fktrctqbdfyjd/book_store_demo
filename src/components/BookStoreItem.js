import React from "react";

const BookStoreItem = props => {
  const { title, description, genre, img, rating, favorite } = props;
  const handleAddToCart = () => {
    props.handleAddToCart({
      title,
      description,
      rating
    });
  };
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} />
      <p>{genre}</p>
      <p>{description}</p>
      <h5>{rating}</h5>
      <input type="checkbox" checked={favorite} />
      <button type="button" onClick={handleAddToCart}>
        add to cart
      </button>
    </div>
  );
};

export default BookStoreItem;
