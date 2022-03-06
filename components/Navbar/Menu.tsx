import { StyledMenu } from "./Menu.styled";
import Link from "next/link";
import { Github, LinkedIn } from "./components";

interface Props {
  open: boolean;
}

const Menu: React.FC<Props> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link href="/about" passHref>
        <a>About</a>
      </Link>
      <Link href="/portfolio" passHref>
        <a>Portfolio</a>
      </Link>
      <Link href="/contact" passHref>
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
    </StyledMenu>
  );
};

export default Menu;
