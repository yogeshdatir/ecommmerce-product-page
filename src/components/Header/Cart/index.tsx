import React, { useRef, useState } from "react";
import { CartContainer, Notification } from "./index.styled";
import { ReactComponent as CartImage } from "../../../assets/images/icon-cart.svg";
import Popup from "./Popup";
import useClickOutside from "../../../hooks/useClickOutside";
import { IProductInCart, useCart } from "../../../contexts/cartContext";

type Props = {};

const Cart = (props: Props) => {
  const [show, setShow] = useState(false);
  const { productsInCart } = useCart();

  const wrapperRef: any = useRef(null);
  useClickOutside(wrapperRef, () => {
    if (show) setShow(!show);
  });

  const totalItems: number = productsInCart
    .map((productInCart: IProductInCart) => productInCart.count)
    .reduce((prevCount, currCount) => prevCount + currCount, 0);

  return (
    <CartContainer ref={wrapperRef}>
      <CartImage onClick={() => setShow(!show)} />
      {productsInCart.length > 0 && (
        <Notification onClick={() => setShow(!show)}>{totalItems}</Notification>
      )}
      {show && <Popup />}
    </CartContainer>
  );
};

export default Cart;
