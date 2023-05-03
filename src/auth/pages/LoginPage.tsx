import classNames from "classnames";
import { useForm } from "react-hook-form";

type LoginForm = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginForm>({
    mode: "onBlur",
  });

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-[450px]:w-[300px] w-[80%] flex flex-col gap-2"
      >
        <h1 className="text-center text-2xl font-bold">Sign in</h1>
        <p className="text-center text-neutral-400 font-heading font-bold">
          My U Library
        </p>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className={classNames("form-control", {
              "!border-red-500": errors.email,
            })}
            placeholder="email@example.com"
            type="text"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className={classNames("form-control ", {
              "!border-red-500": errors.password,
            })}
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "This field is required",
            })}
          />
          {<p className="text-sm text-red-500">{errors.password?.message}</p>}
        </div>
        <button type="submit" disabled={!isValid} className="primary-button">
          Log in
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
