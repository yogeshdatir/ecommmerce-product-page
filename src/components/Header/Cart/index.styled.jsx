import styled from "@emotion/styled";

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    margin: 0 2rem;
    cursor: pointer;

    :hover {
      path {
        fill: #000;
      }
    }
  }
`;

export const Notification = styled.div`
  position: absolute;
  text-align: center;
  padding: 3px 6px;
  background: #ff7e1b;
  border-radius: 6.5px;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  cursor: pointer;

  color: #ffffff;

  top: -50%;
  left: 50%;
`;
