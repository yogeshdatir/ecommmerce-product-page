import React from "react";
import CartItem from "./CartItem";
import {
  CartContent,
  CheckoutButton,
  EmptyState,
  Line,
  PopupContainer,
} from "./Popup.styled";

type Props = {};

const Popup = (props: Props) => {
  return (
    <PopupContainer>
      <h1>Cart</h1>
      <Line />
      <CartContent>
        {/* <EmptyState>Your cart is empty.</EmptyState> */}
        <CartItem />
      </CartContent>
      <CheckoutButton>Checkout</CheckoutButton>
    </PopupContainer>
  );
};

export default Popup;
