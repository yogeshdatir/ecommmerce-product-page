import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  height: 7rem;
  border-bottom: 1px solid #e4e9f2;

  display: flex;
  align-items: center;
`;

export const UserDataContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;

  :hover {
    border: 2px solid #ff7e1b;
  }
`;
