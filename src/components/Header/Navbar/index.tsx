import React from "react";
import { Nav, NavItem } from "./index.styled";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <Nav>
      <NavItem>
        <button>Collections</button>
      </NavItem>
      <NavItem>
        <button>Men</button>
      </NavItem>
      <NavItem>
        <button>Women</button>
      </NavItem>
      <NavItem>
        <button>About</button>
      </NavItem>
      <NavItem>
        <button>Contact</button>
      </NavItem>
    </Nav>
  );
};

export default Navbar;
