import React from "react";
import BookStoreItem from "./BookStoreItem";
import BookStore from "./BookStore";
import Cart from "./Cart";
import CheckoutModal from "./CheckoutModal";

// const HomePage = props => (
//   <div>
//     <h1>home page</h1>
//   </div>
// );

class HomePage extends React.Component {
  state = {
    books: [
      {
        title: "random books",
        description: "ha ha ha",
        genre: "horror",
        img:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoheA5kO11yZ-sdIaDa-f6K8f5cRIvD9vwy_00ncDCa5HS49ki",
        rating: "5",
        favorite: false
      },
      {
        title: "",
        description: "",
        genre: "",
        img: "",
        rating: "",
        favorite: false
      },
      {
        title: "",
        description: "",
        genre: "",
        img: "",
        rating: "",
        favorite: false
      }
    ],
    cartItems: [],
    checkoutOpen: false
  };

  handleOpenCheckout = () => {
    this.setState(prevState => ({ checkoutOpen: !prevState.checkoutOpen }));
  };

  handleCloseModal = () => {
    this.setState(() => ({ checkoutOpen: false }));
  };

  handleAddToCart = props => {
    console.log(props);
    this.setState(prevState => ({
      cartItems: prevState.cartItems.concat(props)
    }));
  };

  handleRemoveFromCart = book => {
    console.log(book);
    this.setState(prevState => ({
      cartItems: prevState.cartItems.filter(
        bookToRemove => JSON.stringify(bookToRemove) !== JSON.stringify(book)
      )
    }));
    console.log(this.state.cartItems);
  };

  render() {
    return (
      <div>
        <h1>Main store</h1>
        <BookStore
          books={this.state.books}
          handleAddToCart={this.handleAddToCart}
        />
        <Cart
          cartItems={this.state.cartItems}
          handleRemoveFromCart={this.handleRemoveFromCart}
          handleOpenCheckout={this.handleOpenCheckout}
        />
        <CheckoutModal
          handleCloseModal={this.handleCloseModal}
          handleOpenModal={this.state.checkoutOpen}
        />
      </div>
    );
  }
}
export default HomePage;
