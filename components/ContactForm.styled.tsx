import styled from "styled-components";
import { keyframes } from "styled-components";

export const FormGroup = styled.div`
  color: var(--color-primary, #3992ff);
  display: block;
  width: 100%;
  margin: 50px auto;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: var(--color-primary, #3992ff);
  display: block;
`;

export const Input = styled.input`
  padding: 1em;
  color: #000;
  background: var(--color-icons, #f8f8f8);
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;

  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: var(--color-tertiary, #f44250);
  display: block;
`;

export const flyOut = keyframes`
    from {
        transform: translateY(0.1em);
    }

    to {
        transform: translateY(-0.1em);
    }
`;

export const SubmitBtn = styled.button`
  font-size: 1.5rem;
  font-family: inherit;
  cursor: pointer;
  background-color: var(--color-primary, #3992ff);
  color: #fff;
  padding: 0.7em 1em 0.7em 0.9em;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.2s;

  span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover .svg-wrapper {
    animation: ${flyOut} 0.6s ease-in-out infinite alternate;
  }

  &:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }

  &:hover span {
    transform: translateX(5em);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const SpamField = styled.p`
  opacity: 0;
  position: absolute;
  height: 0;
  width: 0;

  label {
    opacity: 0;
  }
  input {
    opacity: 0;
  }
`;
