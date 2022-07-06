import React from "react";
import {
  ProductBrandName,
  ProductName,
  ProductDescription,
  ActionContainer,
  ProductPrice,
  ProductMRP,
  ProductDetailsContainer,
  Counter,
  AddToCartButton,
  CounterButton,
} from "./Details.styled";
import { ReactComponent as CartIcon } from "../../../assets/images/icon-cart.svg";
import { ReactComponent as MinusIcon } from "../../../assets/images/icon-minus.svg";
import { ReactComponent as AddIcon } from "../../../assets/images/icon-plus.svg";

type Props = {};

const Details = (props: Props) => {
  return (
    <ProductDetailsContainer>
      <ProductBrandName>Sneaker Company</ProductBrandName>
      <ProductName>Fall Limited Edition Sneakers</ProductName>
      <ProductDescription>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </ProductDescription>
      <ProductPrice>
        $125.00
        <span>50%</span>
      </ProductPrice>
      <ProductMRP>$250.00</ProductMRP>
      <ActionContainer>
        <Counter>
          <CounterButton>
            <MinusIcon />
          </CounterButton>
          <span>0</span>
          <CounterButton>
            <AddIcon />
          </CounterButton>
        </Counter>
        <AddToCartButton>
          <CartIcon />
          Add to cart
        </AddToCartButton>
      </ActionContainer>
    </ProductDetailsContainer>
  );
};

export default Details;
