import styled from "@emotion/styled";

export const CartItemContainer = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;

  svg {
    margin: 0;

    :hover {
      path {
        fill: red;
      }
    }
  }
`;

export const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

export const ProductDetails = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */

  color: #69707d;
`;

export const ProductName = styled.p``;

export const ProductNumbers = styled.p`
  span {
    padding-left: 0.5rem;
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    /* identical to box height, or 162% */

    color: #1d2026;
  }
`;
