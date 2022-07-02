import React from "react";
import Product1 from "../../../assets/images/image-product-1-thumbnail.jpg";
import {
  CartItemContainer,
  ProductDetails,
  ProductName,
  ProductNumbers,
  Thumbnail,
} from "./CartItem.styled";
import { ReactComponent as DeleteIcon } from "../../../assets/images/icon-delete.svg";

type Props = {};

const CartItem = (props: Props) => {
  return (
    <CartItemContainer>
      <Thumbnail src={Product1} alt="product1 thumbnail" />
      <ProductDetails>
        <ProductName>Fall Limited Edition Sneakers</ProductName>
        <ProductNumbers>
          $125.00 x 3<span>$375.00</span>
        </ProductNumbers>
      </ProductDetails>
      <DeleteIcon />
    </CartItemContainer>
  );
};

export default CartItem;
