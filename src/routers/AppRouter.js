import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import Cart from "../components/Cart";
import BookStoreItem from "../components/BookStoreItem";
import Contacts from "../components/Contacts";
import NotFound from "../components/NotFound";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/cart" exact={true} component={Cart} />
        <Route path="/store/:id" component={BookStoreItem} />
        <Route path="/contacts" component={Contacts} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
