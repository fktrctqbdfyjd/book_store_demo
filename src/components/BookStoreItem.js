import React from "react";

const BookStoreItem = props => (
  <div>
    <h1>item: {props.id}</h1>
  </div>
);

BookStoreItem.defaultProps = {
  id: 0
};

export default BookStoreItem;
