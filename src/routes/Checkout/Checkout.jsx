import "./Checkout.styles.scss";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";

const Checkout = () => {
  const { cartItems, cartTotal } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>product</span>
        </div>

        <div className="header-block">
          <span>description</span>
        </div>

        <div className="header-block">
          <span>quantity</span>
        </div>

        <div className="header-block">
          <span>price</span>
        </div>

        <div className="header-block">
          <span>remove</span>
        </div>
      </div>

      {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
      
      <span className="total ">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
