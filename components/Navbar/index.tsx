import {
  Logo,
  MenuWrapper,
  SubMenu,
  NavAnchor,
  Github,
  LinkedIn,
} from "./components";
import Burger from "./Burger";
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <MenuWrapper>
        <Logo />
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
        <SubMenu></SubMenu>
        <SubMenu>
          <Link href="/about" passHref>
            <NavAnchor>About</NavAnchor>
          </Link>
          <Link href="/portfolio" passHref>
            <NavAnchor>Portfolio</NavAnchor>
          </Link>
          <Link href="/contact" passHref>
            <NavAnchor>Contact</NavAnchor>
          </Link>
          <Link href="https://github.com/ldavidson8">
            <a>
              <Github />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/lewis-davidson-9634a61ba/">
            <a>
              <LinkedIn />
            </a>
          </Link>
        </SubMenu>
      </MenuWrapper>
    </>
  );
};
export default Navbar;
