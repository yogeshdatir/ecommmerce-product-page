import React from "react";
import { IProductInCart, useCart } from "../../../contexts/cartContext";
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
  const { productsInCart, setProductsInCart } = useCart();

  const deleteFromCart = (idToDelete: IProductInCart["id"]) => {
    const updatedProductList: IProductInCart[] = productsInCart.filter(
      (productInCart: IProductInCart) => productInCart.id !== idToDelete
    );
    setProductsInCart([...updatedProductList]);
  };

  return (
    <PopupContainer>
      <h1>Cart</h1>
      <Line />
      {productsInCart.length > 0 ? (
        <>
          <CartContent>
            {productsInCart.map((productInCart: IProductInCart) => {
              return (
                <CartItem
                  key={productInCart.id}
                  productInCart={productInCart}
                  deleteFromCart={deleteFromCart}
                />
              );
            })}
          </CartContent>
          <CheckoutButton>Checkout</CheckoutButton>
        </>
      ) : (
        <EmptyCart />
      )}
    </PopupContainer>
  );
};

const EmptyCart = () => {
  return <EmptyState>Your cart is empty.</EmptyState>;
};

export default Popup;
