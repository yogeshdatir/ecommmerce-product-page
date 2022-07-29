import React, { useState } from "react";
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
  ProductPriceWrapper,
} from "./Details.styled";
import { ReactComponent as CartIcon } from "../../../assets/images/icon-cart.svg";
import { ReactComponent as MinusIcon } from "../../../assets/images/icon-minus.svg";
import { ReactComponent as AddIcon } from "../../../assets/images/icon-plus.svg";
import { IProductInCart, useCart } from "../../../contexts/cartContext";

type Props = {};

const Details = (props: Props) => {
  const [itemCount, setItemCount] = useState<number>(1);
  const { productsInCart, setProductsInCart } = useCart();

  const handleAddToCart = () => {
    const existingProductInCart: IProductInCart | undefined =
      productsInCart.filter(
        (productInCart: IProductInCart) => productInCart.id === 1
      )[0];

    if (itemCount < 1) return;

    if (existingProductInCart) {
      const productToAddInCart: IProductInCart = {
        id: 1,
        count: existingProductInCart.count + itemCount,
      };
      setProductsInCart([
        ...productsInCart.filter(
          (productInCart: IProductInCart) => productInCart.id !== 1
        ),
        productToAddInCart,
      ]);
      return;
    }

    const productToAddInCart: IProductInCart = {
      id: 1,
      count: itemCount,
    };
    setProductsInCart([...productsInCart, productToAddInCart]);
  };

  return (
    <ProductDetailsContainer>
      <ProductBrandName>Sneaker Company</ProductBrandName>
      <ProductName>Fall Limited Edition Sneakers</ProductName>
      <ProductDescription>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </ProductDescription>
      <ProductPriceWrapper>
        <ProductPrice>
          $125.00
          <span>50%</span>
        </ProductPrice>
        <ProductMRP>$250.00</ProductMRP>
      </ProductPriceWrapper>
      <ActionContainer>
        <Counter>
          <CounterButton
            area-label="reduce number of items by 1"
            onClick={() => {
              itemCount > 1 &&
                setItemCount((prevItemCount: number) => prevItemCount - 1);
            }}
          >
            <MinusIcon />
          </CounterButton>
          <span>{itemCount}</span>
          <CounterButton
            area-label="increase number of items by 1"
            onClick={() => {
              setItemCount((prevItemCount: number) => prevItemCount + 1);
            }}
          >
            <AddIcon />
          </CounterButton>
        </Counter>
        <AddToCartButton onClick={handleAddToCart}>
          <CartIcon />
          Add to cart
        </AddToCartButton>
      </ActionContainer>
    </ProductDetailsContainer>
  );
};

export default Details;
