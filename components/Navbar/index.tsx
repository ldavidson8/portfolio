import { Logo, MenuWrapper, SubMenu, NavAnchor } from "./components";
import Link from "next/link";
import { Github, LinkedIn } from "../SocialLinks";

const Navbar = () => {
  return (
    <header>
      <MenuWrapper>
        <Logo />
        <SubMenu></SubMenu>
        <SubMenu>
          <Link href="#about" passHref>
            <NavAnchor>About</NavAnchor>
          </Link>
          <Link href="#projects" passHref>
            <NavAnchor>Projects</NavAnchor>
          </Link>
          <Link href="#contact" passHref>
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
    </header>
  );
};
export default Navbar;
