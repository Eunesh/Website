import { httpforAdmin } from "../AxiosIInstance/Https";
import "./PageCss/Admin.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "../GlobalCss/Style.css";
import "../GlobalCss/util.css";
import { useNavigate } from "react-router-dom";

interface datatype {
  AdminUsername: string;
  unhashedpassword: string;
}

// zod schema
const LoginSchema = z.object({
  username: z.string().nonempty(),
  password: z.string().min(10),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

const Admin = () => {
  // Navigate
  const navigate = useNavigate();

  // UseForm
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  // On submit
  const onSubmit: SubmitHandler<LoginSchemaType> = async (formData) => {
    try {
      const data = {
        AdminUsername: formData.username,
        unhashedpassword: formData.password,
      };
      const response = await postResponse(`/adminlogin`, data);

      if (response.status === 200) {
        navigate("/admindashboard");
      }
      reset({ username: "", password: "" });
    } catch (err) {
      alert("Your Password or username is incorrect");
    }
  };

  // function for calling APi endpoint with axios for post
  async function postResponse(url: string, data: datatype) {
    const res = await httpforAdmin.post(url, data);
    return res;
  }

  return (
    <div className="body">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="login_wrapper">
          <h3>Admin Login</h3>
          <input
            type="text"
            id="Username"
            className="input_field full_width"
            placeholder="Username"
            {...register("username")}
            autoComplete="off"
            name="username"
          />
          {errors.username && (
            <span className="error_messgae">Username is empty</span>
          )}

          <input
            type="password"
            id="password"
            className="input_field full_width"
            placeholder="Password"
            {...register("password")}
            autoComplete="off"
            name="password"
          />
          {errors.password && (
            <span className="error_messgae">
              Password must be lengthy enough(10 words min)
            </span>
          )}
          <button className="login_button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Admin;
