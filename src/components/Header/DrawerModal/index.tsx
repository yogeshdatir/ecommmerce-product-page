import React, { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  DrawerModalContainer,
  DrawerModalOverlay,
  DrawerNav,
  DrawerNavItem,
} from "./DrawerModal.styled";
import { ReactComponent as CloseIcon } from "../../../assets/images/icon-close.svg";

const createWrapperAndAppendToBody = () => {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", "DrawerModal");
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

interface IProps {
  showDrawerModal: boolean;
  setShowDrawerModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerModal = ({ showDrawerModal, setShowDrawerModal }: IProps) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById("preview-portal-wrapper");
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody();
    }

    setWrapperElement(element);
    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, []);

  if (wrapperElement === null) return null;

  return createPortal(
    <DrawerModalOverlay show={showDrawerModal}>
      <DrawerModalContainer show={showDrawerModal}>
        <CloseIcon
          style={{ cursor: "pointer" }}
          onClick={() => setShowDrawerModal(false)}
        />
        <DrawerNav>
          <DrawerNavItem>Collections</DrawerNavItem>
          <DrawerNavItem>Men</DrawerNavItem>
          <DrawerNavItem>Women</DrawerNavItem>
          <DrawerNavItem>About</DrawerNavItem>
          <DrawerNavItem>Contact</DrawerNavItem>
        </DrawerNav>
      </DrawerModalContainer>
    </DrawerModalOverlay>,
    wrapperElement
  );
};

export default DrawerModal;
