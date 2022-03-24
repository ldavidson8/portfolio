import { Logo, MenuWrapper, SubMenu } from "./components";
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
            <a>About</a>
          </Link>
          <Link href="#projects" passHref>
            <a>Projects</a>
          </Link>
          <Link href="#contact" passHref>
            <a>Contact</a>
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
