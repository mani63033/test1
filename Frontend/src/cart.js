import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => {
         return (<li key={index}>
            <img src={item} alt={`Cart item ${index}`} style={{ width: "50px" }} />
          </li>)
})}
      </ul>
    </div>
  );
};

export default Cart;
