import styled from "styled-components";
import { keyframes } from "styled-components";

const FormGroup = styled.div`
  color: var(--color-primary, #3992ff);
  display: block;
  width: 100%;
  margin: 50px auto;
`;

const Label = styled.label`
  margin-bottom: 0.5em;
  color: var(--color-primary, #3992ff);
  display: block;
`;

const Input = styled.input`
  padding: 0.5em;
  color: #000;
  background: var(--color-icons, #f8f8f8);
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`;

const TextArea = styled.textarea`
  width: 100%;
`;

const Message = styled.label`
  margin-bottom: 0.5em;
  color: var(--color-primary, #3992ff);
  display: block;
`;

const flyOut = keyframes`
    from {
        transform: translateY(0.1em);
    }

    to {
        transform: translateY(-0.1em);
    }
`;

const SubmitBtn = styled.button`
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

const SpamField = styled.p`
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

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="fullname"
    >
      <Input type="hidden" name="form-name" value="contact" />
      <SpamField>
        <label aria-hidden="true">
          Full Name
          <input name="fullname" aria-hidden="true" />
        </label>
      </SpamField>
      <FormGroup>
        <Label htmlFor="label">Name</Label>
        <Input id="label" type="text" required />
        {/* <Message>This is the validation message</Message> */}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" required />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <TextArea id="message" rows={5} required />
      </FormGroup>
      <SubmitBtn>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              ></path>
            </svg>
          </div>
        </div>
        <span>Send</span>
      </SubmitBtn>
    </form>
  );
};
export default ContactForm;
