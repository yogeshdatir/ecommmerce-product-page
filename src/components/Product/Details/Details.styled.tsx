import styled from "@emotion/styled";

export const ProductDetailsContainer = styled.div``;

export const ProductBrandName = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;

  color: #ff7e1b;
`;

export const ProductName = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  /* or 109% */

  color: #1d2026;
`;

export const ProductDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  color: #69707d;
`;

export const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;

  color: #1d2026;
  padding-top: 1.5rem;

  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    padding: 0.25rem 0.5rem;
    margin-left: 1.5rem;

    color: #ff7e1b;
    background: #ffeee2;
    border-radius: 6px;
  }
`;

export const ProductMRP = styled.p`
  margin-top: 0.5rem;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */

  text-decoration-line: line-through;

  color: #b6bcc8;
`;

export const ActionContainer = styled.div`
  padding-top: 2rem;
  display: flex;
`;

export const Counter = styled.div`
  background: #f6f8fd;
  width: 10rem;
  border-radius: 10px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;

    color: #1d2026;
  }
`;

export const CounterButton = styled.button`
  border: none;
  height: 100%;
  padding: 0 1rem;
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;

  :hover {
    svg {
      path {
        fill: #ffab6a;
      }
    }
  }
`;

export const AddToCartButton = styled.button`
  background: #ff7e1b;
  box-shadow: 0px 20px 50px -20px #ff7e1b;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;
  padding: 18px 4.75rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  :hover {
    background: #ffab6a;
  }

  svg {
    padding-right: 1rem;
    path {
      fill: #ffffff;
    }
  }
`;
