import styled from "styled-components";

interface Props {
  open: boolean;
}

export const StyledMenu = styled.nav<Props>`
  flex-flow: column wrap;
  background-color: var(--color-background, #121212);
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  display: flex;
  width: 100%;
  z-index: 1000;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;
  align-items: center;
  a {
    font-size: clamp(2rem, 4vw, 3rem);
    padding: 1em;
    color: white;
    transition: color 0.3s;
    &:hover {
      color: var(--color-primary, #3992ff);
    }
  }
  @media (min-width: 876px) {
    display: none;
  }
`;
