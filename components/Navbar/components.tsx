import styled from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

export const Logo = () => {
  return (
    <>
      <Link href="/" passHref>
        <a>
          <svg
            width="34"
            height="41"
            viewBox="0 0 34 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 0C16.308 0.072 18.936 0.666 21.384 1.782C23.832 2.862 25.974 4.32 27.81 6.156C29.646 7.992 31.086 10.134 32.13 12.582C33.174 14.994 33.696 17.55 33.696 20.25C33.696 23.058 33.138 25.704 32.022 28.188C30.906 30.636 29.412 32.778 27.54 34.614C25.668 36.414 23.508 37.836 21.06 38.88C18.648 39.924 16.128 40.464 13.5 40.5H0V33.696H14.31C16.074 33.768 17.712 33.426 19.224 32.67C20.772 31.914 22.122 30.906 23.274 29.646C24.426 28.35 25.326 26.892 25.974 25.272C26.658 23.616 27 21.942 27 20.25C27 18.558 26.658 16.902 25.974 15.282C25.326 13.626 24.426 12.168 23.274 10.908C22.158 9.648 20.826 8.64 19.278 7.884C17.73 7.128 16.074 6.768 14.31 6.804H0V0H13.5Z"
              fill="#F5F6F8"
            />
          </svg>
        </a>
      </Link>
    </>
  );
};

export const MenuWrapper = styled.nav`
  padding: 1rem 2rem;
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
