import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);

const BookStoreItem = props => {
  const { title, description, genre, img, price } = props;
  const handleAddToCart = () => {
    props.handleAddToCart({
      title,
      description,
      price
    });
  };
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <img className="card__image" src={img} />
      <div className="card__genres">
        <p className="card__genres--genre">{genre}</p>
      </div>
      <p className="card__description">{description}</p>
      <h3 className="card__price">
        $
        {price}
      </h3>
      <button
        className="btn--add card__btn"
        type="button"
        onClick={handleAddToCart}
      >
        add to cart
      </button>
    </div>
  );
};

export default BookStoreItem;
