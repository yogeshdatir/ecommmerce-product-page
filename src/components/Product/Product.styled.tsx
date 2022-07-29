import styled from "@emotion/styled";

export const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4.5rem 3rem;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 720px) {
    padding: 0;
    padding-bottom: 3rem;
    flex-direction: column;
  }
`;

export const ProductInfoContainer = styled.div`
  padding-left: 5rem;
  max-width: 53%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 719px) {
    max-width: 100%;
    padding: 1.5rem;
  }
`;
