import React from "react";
import BookStoreItem from "./BookStoreItem";
import BookStore from "./BookStore";
import Cart from "./Cart";
import CheckoutModal from "./CheckoutModal";
import books from "./seedBooks/books";

// const HomePage = props => (
//   <div>
//     <h1>home page</h1>
//   </div>
// );

class HomePage extends React.Component {
  state = {
    books,
    cartItems: [],
    checkoutOpen: false
  };

  handleOpenCheckout = () => {
    this.setState(prevState => ({ checkoutOpen: !prevState.checkoutOpen }));
    localStorage.clear();
  };

  handleCloseModal = () => {
    this.setState(() => ({ checkoutOpen: false }));
  };

  handleAddToCart = book => {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.concat(book)
    }));
  };

  handleRemoveFromCart = book => {
    this.setState(prevState => ({
      cartItems: prevState.cartItems.filter(
        bookToRemove =>
          JSON.stringify(bookToRemove.title) !== JSON.stringify(book.title)
      )
    }));
  };

  handleRemoveAll = () => {
    this.setState({
      cartItems: []
    });
  };

  //lifecycle
  componentDidMount() {
    try {
      const json = localStorage.getItem("cartItems");
      const cartItems = JSON.parse(json);
      if (cartItems) {
        this.setState(() => ({ cartItems }));
      }
    } catch (e) {
      //do nothing
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cartItems.length !== this.state.cartItems.length) {
      const json = JSON.stringify(this.state.cartItems);
      localStorage.setItem("cartItems", json);
    }
  }

  render() {
    return (
      <div>
        <h1 className="header__title">Main store</h1>
        <div className="container">
          <BookStore
            books={this.state.books}
            handleAddToCart={this.handleAddToCart}
          />
          {this.state.cartItems.length > 0 && (
            <Cart
              cartItems={this.state.cartItems}
              handleRemoveFromCart={this.handleRemoveFromCart}
              handleOpenCheckout={this.handleOpenCheckout}
              handleRemoveAll={this.handleRemoveAll}
            />
          )}
          <CheckoutModal
            handleCloseModal={this.handleCloseModal}
            handleOpenModal={this.state.checkoutOpen}
          />
        </div>
      </div>
    );
  }
}
export default HomePage;
