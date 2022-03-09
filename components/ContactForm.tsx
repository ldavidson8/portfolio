import {
  FormGroup,
  Label,
  Input,
  TextArea,
  Message,
  SubmitBtn,
  SpamField,
} from "./ContactForm.styled";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();
  // const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <form
      name="contact"
      id="contact"
      method="POST"
      action="/"
      data-netlify="true"

      // onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          {...register("name", {
            required: {
              value: true,
              message: "Please enter your name",
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
            pattern: /.+@.+/,
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
              message: "Please enter your message",
            },
          })}
        />
        <Message>{errors?.message?.message}</Message>
      </FormGroup>

      {/* <input type="submit" /> */}
      <SubmitBtn type="submit" form="contact">
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
