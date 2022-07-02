import styled from "@emotion/styled";

export const Nav = styled.nav`
  padding: 0 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  margin: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    :hover {
      ::after {
        content: "";
        height: 4px;
        width: 100%;
        background-color: orange;
        position: absolute;
        bottom: -1px;
        left: 0;
      }
    }
  }
`;
