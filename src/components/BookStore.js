import React from "react";
import BookStoreItem from "./BookStoreItem";

const BookStore = props => {
  return (
    <div>
      <h1>{props.books.length}</h1>
      {props.books.map((book, i) => {
        const { title, description, genre, img, rating, favorite } = book;
        return (
          <BookStoreItem
            title={title}
            description={description}
            genre={genre}
            img={img}
            rating={rating}
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
