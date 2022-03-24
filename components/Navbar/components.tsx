import styled from "styled-components";
import Link from "next/link";

export const Logo = () => {
  return (
    <>
      <Link href="/" passHref>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="47"
            viewBox="0 0 293 391"
            fill="none"
          >
            <path
              d="M279.128 122.331C288.331 145.455 293 169.893 293 194.964C293 303.063 206.541 391 100.267 391H38.2752C17.1714 391 0 373.633 0 352.28V38.7198C0 17.0052 16.8113 0 38.2752 0H100.267C150.054 0 197.316 19.1946 233.345 54.0428C237.088 57.6634 237.22 63.671 233.641 67.457C230.062 71.243 224.128 71.3906 220.376 67.7558C187.855 36.3003 145.199 18.9799 100.258 18.9799H38.2645C27.1428 18.9799 18.7517 27.4646 18.7517 38.7194V352.294C18.7517 363.179 27.5045 372.033 38.2645 372.033H100.256C196.181 372.033 274.227 292.605 274.227 194.977C274.227 172.342 270.019 150.291 261.717 129.433C259.779 124.569 262.11 119.041 266.914 117.081C271.722 115.126 277.186 117.484 279.124 122.339L279.128 122.331ZM67.6912 206.503C72.8696 206.503 77.0727 210.75 77.0727 215.994V313.025H100.263C165.083 312.522 215.917 260.67 215.917 194.963C215.917 130.45 164.033 77.9658 100.263 77.9658H77.0727V156.176C77.0727 161.414 72.8699 165.666 67.6912 165.666C62.5125 165.666 58.3098 161.415 58.3098 156.176V68.4743C58.3098 63.2357 62.5125 58.9838 67.6912 58.9838H100.263C174.382 58.9838 234.682 119.984 234.682 194.964C234.682 271.227 175.667 331.426 100.335 332.003H67.6926C62.5142 332.003 58.3112 327.752 58.3112 322.513V215.992C58.3112 210.753 62.5139 206.502 67.6926 206.502L67.6912 206.503Z"
              fill="url(#paint0_linear_150_32)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_150_32"
                x1="0"
                y1="0"
                x2="293"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1ABCFE" />
                <stop offset="1" stopColor="#95E0FF" />
              </linearGradient>
            </defs>
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
  align-items: center;
  width: 100%;
  padding: 1rem 0;

  @media screen and (min-width: 876px) {
    display: flex;
  }

  a {
    color: white;
    font-size: clamp(1em, 3vw, 1.5em);
    :hover {
      color: var(--color-primary, #7db1ff);
      transition: color 0.3s;
    }
  }

  svg {
    :hover {
      color: var(--color-primary, #7db1ff);
      transition: color 0.3s;
    }
  }
`;
