import styled from "@emotion/styled";

interface IDrawerModalOverlayProps {
  show: boolean;
}

export const DrawerModalOverlay = styled.div`
  width: ${({ show }: IDrawerModalOverlayProps) => (show ? "100%" : "0")};
  opacity: ${({ show }: IDrawerModalOverlayProps) => (show ? "1" : "0")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  transition: opacity 0.5s ease-in-out;
`;

export const DrawerModalContainer = styled.div`
  position: fixed;
  width: 66.67%;
  height: 100vh;
  background: #fff;
  padding: 2rem 1.5rem;
  box-sizing: border-box;
  transform: ${({ show }: IDrawerModalOverlayProps) =>
    show ? "translateX(0)" : "translateX(-100%)"};
  transition: all 0.5s ease-in-out;
`;

export const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 3.5rem;
  gap: 1.25rem;
`;

export const DrawerNavItem = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #1d2026;
  cursor: pointer;
  user-select: none;
`;
