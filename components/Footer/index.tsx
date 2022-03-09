import { FooterWrapper, Navigation, Anchor } from "./components";
import { Github } from "../SocialLinks";

const Footer = () => {
  return (
    <FooterWrapper>
      <Navigation>
        <Anchor href="https://nextjs.org/">Made with NextJS</Anchor>
        <Anchor href="https://github.com/ldavidson8">
          Made by Lewis Davidson <Github />
        </Anchor>
      </Navigation>
    </FooterWrapper>
  );
};
export default Footer;
