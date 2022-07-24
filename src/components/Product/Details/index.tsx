import React, { MouseEvent, useState } from "react";
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
  const [itemCount, setItemCount] = useState<number>(0);
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
          <CounterButton
            onClick={(event: MouseEvent) => {
              itemCount > 0 &&
                setItemCount((prevItemCount: number) => prevItemCount - 1);
            }}
          >
            <MinusIcon />
          </CounterButton>
          <span>{itemCount}</span>
          <CounterButton
            onClick={(event: MouseEvent) => {
              setItemCount((prevItemCount: number) => prevItemCount + 1);
            }}
          >
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
