import {
  ArrowDown,
  ColoredText,
  MainHeading,
  SubHeading,
  HeroSection,
} from "styles/GlobalComponents";
import Link from "next/link";

const Hero = () => {
  return (
    <HeroSection>
      <MainHeading>Lewis Davidson</MainHeading>
      <SubHeading>
        {" "}
        Web{" "}
        <ColoredText color="var(--color-primary, #3992FF)">
          {" "}
          Developer{" "}
        </ColoredText>{" "}
        &amp;{" "}
        <ColoredText color="var(--color-secondary,#D83BD2)">
          {" "}
          Designer{" "}
        </ColoredText>{" "}
      </SubHeading>

      <Link href="#about">
        <a>
          <ArrowDown />
        </a>
      </Link>
    </HeroSection>
  );
};
export default Hero;
