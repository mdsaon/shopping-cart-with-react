import React from "react";
const RemoveBtn = (props) => {
  return (
    <button onClick={() => props.removeFromCart(props.cartItem)}>
     Remove
    </button>
  );
};
export default RemoveBtn;
