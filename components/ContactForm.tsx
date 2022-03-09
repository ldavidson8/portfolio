import {
  FormGroup,
  Label,
  Input,
  TextArea,
  Message,
  SubmitBtn,
  SpamField,
  FormSuccess,
} from "./ContactForm.styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

// Source: https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [submitted, setSubmitted] = useState(false);

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(() => console.log("Success!"))
      .catch((error) => console.log(error));

    setSubmitted(true);
    console.log(data);
  };

  return (
    <>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
      >
        <SpamField>
          <label>
            Don&apos;t fill this out if you expect to hear from me!
            <input name="bot-field" />
          </label>
        </SpamField>
        <input type="hidden" name="contact" value="contact" />
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "Please enter a name",
              },
            })}
          />
          <Message>{errors?.name?.message}</Message>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: true,
              pattern: emailRegex,
            })}
          />
          <Message>
            {errors?.email?.type === "required" && "Email is required"}
          </Message>
          <Message>
            {errors?.email?.type === "pattern" &&
              "Email should be in xxx@yyy.zzz format"}
          </Message>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            rows={5}
            {...register("message", {
              required: {
                value: true,
                message: "Please enter a message",
              },
            })}
          />
          <Message>{errors?.message?.message}</Message>
        </FormGroup>
        {/* <input type="submit" /> */}
        <SubmitBtn type="submit">
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
      {submitted && (
        <FormSuccess>
          Thank you for reaching out to me, I&apos;ll be back in touch soon!
        </FormSuccess>
      )}
    </>
  );
};
export default ContactForm;
