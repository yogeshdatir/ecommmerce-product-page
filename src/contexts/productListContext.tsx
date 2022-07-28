import React, { createContext, useContext, useState } from "react";
import { IProductList, products as productsData } from "../data";

export interface ProductListContextInterface {
  products: IProductList | null;
  setProducts: React.Dispatch<React.SetStateAction<IProductList | null>>;
}

const productListContext = createContext<ProductListContextInterface | null>(
  null
);

export default function ProductListContextProvider(props: any) {
  const [products, setProducts] = useState<IProductList | null>(productsData);

  const cartContextState: ProductListContextInterface = {
    products,
    setProducts,
  };

  return (
    <productListContext.Provider value={cartContextState}>
      {props.children}
    </productListContext.Provider>
  );
}

export function useProducts() {
  const context = useContext<ProductListContextInterface | null>(
    productListContext
  );
  if (context === null) {
    throw new Error(
      "useProducts must be used within a ProductListContextProvider"
    );
  }
  return context;
}
