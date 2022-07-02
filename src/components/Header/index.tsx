import React from "react";
import { Avatar, HeaderContainer, UserDataContainer } from "./index.styled";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Navbar from "./Navbar";
import Cart from "./Cart";
import ProfileImage from "../../assets/images/image-avatar.png";

type Props = {};

const Header = (props: Props) => {
  return (
    <HeaderContainer>
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
