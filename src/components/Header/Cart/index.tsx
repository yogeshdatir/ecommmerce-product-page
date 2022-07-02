import React, { useRef, useState } from "react";
import { CartContainer, Notification } from "./index.styled";
import { ReactComponent as CartImage } from "../../../assets/images/icon-cart.svg";
import Popup from "./Popup";
import useClickOutside from "../../../hooks/useClickOutside";

type Props = {};

const Cart = (props: Props) => {
  const [show, setShow] = useState(false);
  const wrapperRef: any = useRef(null);
  useClickOutside(wrapperRef, () => {
    if (show) setShow(!show);
  });

  return (
    <CartContainer ref={wrapperRef} onClick={() => setShow(true)}>
      <CartImage />
      <Notification>3</Notification>
      {show && <Popup />}
    </CartContainer>
  );
};

export default Cart;
