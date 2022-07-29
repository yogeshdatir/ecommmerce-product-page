import React, { useState } from "react";
import { Avatar, HeaderContainer, UserDataContainer } from "./index.styled";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/images/icon-menu.svg";
import Navbar from "./Navbar";
import Cart from "./Cart";
import ProfileImage from "../../assets/images/image-avatar.png";
import DrawerModal from "./DrawerModal";

type Props = {};

const Header = (props: Props) => {
  const [showDrawerModal, setShowDrawerModal] = useState<boolean>(false);
  return (
    <HeaderContainer>
      <MenuIcon id="menuIcon" onClick={() => setShowDrawerModal(true)} />
      <DrawerModal
        showDrawerModal={showDrawerModal}
        setShowDrawerModal={setShowDrawerModal}
      />
      <Logo />
      <Navbar />
      <UserDataContainer>
        <Cart />
        <Avatar src={ProfileImage} alt="avatar" />
      </UserDataContainer>
    </HeaderContainer>
  );
};

export default Header;
