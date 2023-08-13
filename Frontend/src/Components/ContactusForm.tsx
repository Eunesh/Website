import "./Css/ContactusForm.css";
import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// zod schema
const MessageFormSchema = z.object({
  email: z.string().email(),
  firstname: z.string().nonempty(),
  lastname: z.string().nonempty(),
  message: z.string().min(5).max(50),
});

type MessageFormSchemaType = z.infer<typeof MessageFormSchema>;

// Main function
const ContactusForm = () => {
  // UseForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageFormSchemaType>({
    resolver: zodResolver(MessageFormSchema),
  });

  // On submit
  const onSubmit: SubmitHandler<MessageFormSchemaType> = (data) => {
    console.log(data);
    reset({ firstname: "", lastname: "", email: "", message: "" });
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form_Card">
      <div className="container flexbox">
        <h1 className="headline">Contact us</h1>
        <div>
          <div className="Names_placeholder">
            <input
              type="text"
              id="firstName"
              className="input_field half_width"
              placeholder="First name*"
              {...register("firstname")}
              autoComplete="off"
            />

            <input
              type="text"
              id="lastName"
              className="input_field half_width"
              placeholder="Last name*"
              autoComplete="off"
              {...register("lastname")}
            />
          </div>
          {errors.firstname && (
            <span className="error_messgae">{errors.firstname.message}</span>
          )}
          {errors.lastname && (
            <span className="error_messgae">{errors.lastname.message}</span>
          )}
        </div>

        <div>
          <input
            type="text"
            id="email"
            className="input_field full_width"
            placeholder="Your Email*"
            autoComplete="off"
            {...register("email")}
          ></input>
          {errors.email && (
            <span className="error_messgae">{errors.email.message}</span>
          )}
        </div>
        <div>
          <textarea
            className="text_field full_width"
            id="message"
            rows={4}
            cols={50}
            placeholder="Message*"
            autoComplete="off"
            {...register("message")}
          />
          {errors.message && (
            <span className="error_messgae">
              Please dont leave message field empty
            </span>
          )}
        </div>
        <button className="submit_button">Submit</button>
      </div>
    </form>
  );
};

export default ContactusForm;
