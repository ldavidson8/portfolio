import {
  MenuWrapper,
  SubMenu,
  NavAnchor,
  Github,
  LinkedIn,
  Hamburger,
} from "./components";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  return (
    <>
      <MenuWrapper>
        <div>
          <h1>hi</h1>
        </div>
        <SubMenu>
          <h1>Hello</h1>
        </SubMenu>
        <Hamburger />
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
