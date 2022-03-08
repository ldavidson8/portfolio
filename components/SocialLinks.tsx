import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";
import styled from "styled-components";

export const Github = styled(BsGithub)`
  color: var(--color-icons, #f8f8f8);
  font-size: 2rem;
  transition: color 0.3s;
  &:hover {
    color: var(--color-secondary, #d83bd2);
  }
`;

export const LinkedIn = styled(BsLinkedin)`
  color: var(--color-icons, #f8f8f8);
  font-size: 2rem;
  transition: color 0.3s;
  &:hover {
    color: var(--color-secondary, #d83bd2);
  }
`;

export const Email = styled(BsFillEnvelopeFill)`
  color: var(--color-icons, #f8f8f8);
  font-size: 2rem;
  transition: color 0.3s;
  &:hover {
    color: var(--color-secondary, #d83bd2);
  }
`;
