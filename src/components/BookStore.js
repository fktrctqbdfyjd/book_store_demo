import React from "react";
import BookStoreItem from "./BookStoreItem";

const BookStore = props => {
  return (
    <div className="books_store">
      {props.books.map((book, i) => {
        const { title, description, genre, img, price, favorite } = book;
        return (
          <BookStoreItem
            title={title}
            description={description}
            genre={genre}
            img={img}
            price={price}
            favorite={favorite}
            handleAddToCart={props.handleAddToCart}
            key={i}
          />
        );
      })}
    </div>
  );
};

export default BookStore;
