import styled from "styled-components";

interface Props {
  open: boolean;
}

export const StyledBurger = styled.button<Props>`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  width: 40px;
  position: absolute;
  top: 30px;
  right: 5%;
  z-index: 1001;

  @media screen and (min-width: 876px) {
    display: none;
  }

  &:focus {
    outline: none;
  }

  div {
    background-color: var(--color-text, #fff);
    border-radius: 10px;
    height: 4px;
    margin: 4px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    position: relative;

    &:nth-child(1) {
      width: 50%;
      transform-origin: bottom;
      transform: ${({ open }) =>
        open
          ? "rotatez(45deg) translate(6px, 0px)"
          : "rotatez(0deg) translate(0px)"};
    }

    &:nth-child(2) {
      width: 100%;
      transform-origin: top;
      transform: ${({ open }) => (open ? "rotatez(-45deg)" : "rotatez(0deg)")};
    }

    &:nth-child(3) {
      width: 75%;
      transform-origin: bottom;
      transform: ${({ open }) =>
        open
          ? "translate(9px, -10px) rotatez(45deg)"
          : "translate(0) rotatez(0deg)"};
    }
  }
`;
