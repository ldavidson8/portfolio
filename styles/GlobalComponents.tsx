import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

export const HeroSection = styled.div`
  display: flex;
  position: relative;
  height: 85vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainHeading = styled.h1`
  font-size: clamp(2.5em, 6vw, 4em);
  font-family: "Josefin Sans", sans-serif;
  color: #fff;
  margin-bottom: 1em;
`;

export const SubHeading = styled.h2`
  font-size: clamp(1.5em, 4vw, 3em);
  font-family: "Josefin Sans", sans-serif;
  margin-bottom: 1em;
  color: #fff;
  font-weight: 400;
`;

export const ColoredText = styled.span`
  color: ${({ color }) => color};
`;

export const fadeMoveDown = keyframes`
    0%{
        opacity: 0;
        transform: translateY(0px);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: translateY(20px);
    }
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
  color: var(--color-icons, #f8f8f8);
  font-size: 3rem;
  position: absolute;
  animation: ${fadeMoveDown} 2s infinite;
  bottom: 0;
`;

export const PageSection = styled.div`
  padding: 2em;

  @media screen and (min-width: 768px) {
    padding: 5em;
  }

  @media screen and (min-width: 1440px) {
    padding: 10em;
  }
`;

export const InnerSection = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 2rem 0;
`;

export const Container = styled.div`
  margin: 0;
  width: 100%;
  flex-direction: column;
  /* max-width: 90%; */
  display: flex;
  gap: 1rem;
  @media screen and (min-width: 876px) {
    flex-direction: row;
  }
`;

export const TextContainer = styled.div`
  font-size: 1.25rem;
  padding: 0.5em;
  line-height: 2;
`;

export const TextSection = styled.p`
  margin: 1em 0;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0;
`;

export const SocialLink = styled.a`
  display: flex;
  margin: 1em 0;
  align-items: center;
  gap: 1.5em;
  width: fit-content;
`;

export const SocialLinkText = styled.p`
  font-size: 1.3rem;
  line-height: 2;
`;
