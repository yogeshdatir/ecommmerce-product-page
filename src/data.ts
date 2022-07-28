export interface IProduct {
  id: number;
  brandName: string;
  productName: string;
  description: string;
  price: string;
  mrp: string;
  discount: string;
}

export interface IProductList {
  data: IProduct[];
}

export const products: IProductList = {
  data: [
    {
      id: 1,
      brandName: `Sneaker Company`,
      productName: `Fall Limited Edition Sneakers`,
      description: `These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.`,
      price: "$125.00",
      discount: "50%",
      mrp: "$250.00",
    },
  ],
};
