import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setLogin } from "../actions/clientReducerActions";

function LoginPage() {
  const dispatch = useDispatch();

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const submitHandler = (data) => {
    dispatch(setLogin(data));
    history.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="font-montserrat flex flex-col text-xl w-[26.5rem] lg:w-[80rem]"
    >
      <h2 className="text-[#252B42] text-4xl font-bold my-10 w-96 text-left max-[639px]:pl-16 leading-snug lg:w-[40rem] lg:mx-auto lg:text-center">
        Login
      </h2>
      <div>
        <input
          className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
          placeholder="E-mail *"
          id="email"
          type="email"
          {...register("email", {
            required: true,
          })}
        />
        <p className="text-[#737373] text-sm text-left pl-2">
          {errors.email?.message}
        </p>
      </div>
      <div>
        <input
          className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
          placeholder="Password *"
          id="password"
          type="password"
          {...register("password", {
            required: true,
            pattern: {
              value:
                /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
              message:
                "Password must be at least 8 characters and contain a number, a lower case, an upper case, a special character",
            },
          })}
        />
        <p className="text-[#737373] text-sm text-left pl-2 w-80 lg:w-96">
          {errors.password?.message}
        </p>
      </div>
      <button
        className="w-80 mx-auto lg:w-96 h-16 bg-[#23A6F0] rounded-md text-[#FFFFFF] mb-20"
        type="login"
      >
        Submit
      </button>
    </form>
  );
}

export default LoginPage;
