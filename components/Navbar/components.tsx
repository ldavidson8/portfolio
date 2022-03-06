import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const MenuWrapper = styled.nav`
  padding: 1rem 0;
  height: 65px;
  position: relative;
  top: 0;
  z-index: 1;
  max-width: 90em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin: auto;
  background: transparent;
`;

export const MobileMenu = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  padding: 0.5em;
  width: 100%;

  @media screen and (min-width: 876px) {
    display: none;
  }
`;

export const SubMenu = styled.div`
  display: none;
  justify-content: space-around;
  width: 100%;
  padding: 1rem 0;

  @media screen and (min-width: 876px) {
    display: flex;
  }
`;

export const NavAnchor = styled.a`
  color: white;
  font-size: clamp(1em, 1em+2vw, 3em);
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: var(--color-primary, #3992ff);
  }
`;

export const Github = styled(BsGithub)`
  color: var(--color-icons, #f8f8f8);
  transform: scale(2);
  transition: color 0.3s;
  &:hover {
    color: var(--color-secondary, #d83bd2);
  }
`;

export const LinkedIn = styled(BsLinkedin)`
  color: var(--color-icons, #f8f8f8);
  transform: scale(2);
  transition: color 0.3s;
  &:hover {
    color: var(--color-secondary, #d83bd2);
  }
`;

const BurgerDiv = styled.span`
  background: #fff;
  border-radius: 10px;
  height: 4px;
  margin: 4px 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
`;

const BurgerDiv1 = styled(BurgerDiv)`
  width: 50%;
`;

const BurgerDiv2 = styled(BurgerDiv)`
  width: 100%;
`;

const BurgerDiv3 = styled(BurgerDiv)`
  width: 75%;
`;

const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  width: 40px;
  cursor: pointer;
  @media screen and (min-width: 876px) {
    display: none;
  }
`;

export const Hamburger = () => {
  return (
    <HamburgerIcon>
      <BurgerDiv1 />
      <BurgerDiv2 />
      <BurgerDiv3 />
    </HamburgerIcon>
  );
};
