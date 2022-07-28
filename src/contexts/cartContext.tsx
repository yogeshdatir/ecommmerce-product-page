import React, { createContext, useContext, useState } from "react";
import { IProduct } from "../data";

export interface IProductInCart {
  id: IProduct["id"];
  count: number;
}

export interface CartContextInterface {
  productsInCart: IProductInCart[];
  setProductsInCart: React.Dispatch<React.SetStateAction<IProductInCart[]>>;
}

const cartContext = createContext<CartContextInterface | null>(null);

export default function CartContextProvider(props: any) {
  const [productsInCart, setProductsInCart] = useState<IProductInCart[]>([]);

  const cartContextState: CartContextInterface = {
    productsInCart,
    setProductsInCart,
  };

  return (
    <cartContext.Provider value={cartContextState}>
      {props.children}
    </cartContext.Provider>
  );
}

export function useCart() {
  const context = useContext<CartContextInterface | null>(cartContext);
  if (context === null) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
}
