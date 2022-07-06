import React from "react";
import Details from "./Details";
import Preview from "./Preview";
import { ProductContainer, ProductInfoContainer } from "./Product.styled";

type Props = {};

const Product = (props: Props) => {
  return (
    <ProductContainer>
      <Preview />
      <ProductInfoContainer>
        <Details />
      </ProductInfoContainer>
    </ProductContainer>
  );
};

export default Product;
