import React from "react";
import ReactDOM from "react-dom";
import BookstoreApp from "./components/BookstoreApp";
import AppRouter from "./routers/AppRouter";
import "normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<AppRouter />, document.getElementById("app"));
