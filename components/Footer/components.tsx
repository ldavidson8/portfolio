import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #202020;
  padding-top: clamp(2.67rem, 2.07rem + 3vw, 4.21rem);
  padding-bottom: clamp(2.67rem, 2.07rem + 3vw, 4.21rem);
`;

export const Navigation = styled.nav`
  max-width: 30rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

export const Anchor = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s;

  &:hover {
    color: var(--color-primary, #3992ff);
  }
`;
