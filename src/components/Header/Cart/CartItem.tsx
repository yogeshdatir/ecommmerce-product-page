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
import { IProductInCart } from "../../../contexts/cartContext";
import { useProducts } from "../../../contexts/productListContext";
import { IProduct } from "../../../data";

interface IProps {
  productInCart: IProductInCart;
  deleteFromCart: (idToDelete: IProductInCart["id"]) => void;
}

const CartItem = ({ productInCart, deleteFromCart }: IProps) => {
  const { products } = useProducts();
  const product: IProduct | undefined = products?.data?.filter(
    (productToCheck: IProduct) => productToCheck.id === productInCart.id
  )[0];

  return (
    <CartItemContainer>
      {product && (
        <>
          <Thumbnail src={Product1} alt="product1 thumbnail" />
          <ProductDetails>
            <ProductName>{product.productName}</ProductName>
            <ProductNumbers>
              {product.price} x {productInCart.count}
              <span>
                {(+product.price.substring(1) * productInCart.count).toFixed(2)}
              </span>
            </ProductNumbers>
          </ProductDetails>
          <DeleteIcon onClick={() => deleteFromCart(productInCart.id)} />
        </>
      )}
    </CartItemContainer>
  );
};

export default CartItem;
