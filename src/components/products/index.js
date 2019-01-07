import React from "react";
import ProductListsItems from "./ProductListsItems";
import { connect } from "react-redux";

const ProductLists = props => (
  <div className="product-listing">
    {props.products.map(product => (
      <ProductListsItems
        product={product}
        addToCart={props.addToCart}
        removeFromCart={props.removeFromCart}
        cartItem={props.cart.filter(cartItem=>cartItem.id === product.id)[0]}
      />
    ))}
  </div>
);
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: item => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE", payload: item });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductLists);
