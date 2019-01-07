import React, { Component } from "react";
import "./App.css";
import Products from "./components/products";
import Carts from "./components/carts";
import Router from "./Router";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation />
        <h1>Hello Shopping Cart</h1>
        <Router />
      </div>
    );
  }
}

export default App;
