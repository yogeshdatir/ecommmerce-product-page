import styled from "@emotion/styled";

export const PopupContainer = styled.div`
  padding: 1.5rem;
  position: absolute;
  display: flex;
  flex-direction: column;

  top: 210%;
  background: #ffffff;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);
  border-radius: 10px;
  left: 50%;
  transform: translate(-88%, 0);
  box-sizing: border-box;
  width: 22.5rem;
  min-height: 16rem;

  @media screen and (max-width: 719px) {
    transform: translate(-80.25%, 0);
    z-index: 1;
    top: 280%;
  }

  h1 {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    color: #1d2026;
    padding-bottom: 1.5rem;
    margin: 0;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: #e4e9f2;
`;

export const CartContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  /* identical to box height, or 162% */

  text-align: center;

  color: #69707d;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  background: #ff7e1b;
  border-radius: 10px;
  border: none;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  cursor: pointer;

  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: #ffffff;
  transition: all 0.2s ease-in-out;

  :hover {
    background: #ffab6a;
  }
`;
