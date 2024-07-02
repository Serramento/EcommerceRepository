import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../actions/clientReducerActions";
import axios from "axios";
import { toast } from "react-toastify";

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const historyExist = location.key !== "default";

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
    axios
      .post(
        "https://workintech-fe-ecommerce.onrender.com/login",
        JSON.stringify(data),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(setUser(data));
        toast.success("Successfully logged in!");
        if (historyExist) {
          history.go(-1);
        } else {
          history.push("/");
        }
      })
      .catch((err) => {
        toast.error("There is an error in the login info, please check again!");
        console.error(err.response.message);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="font-montserrat flex flex-col text-xl w-[26.5rem] lg:w-[80rem]"
    >
      <h2 className="text-[#252B42] text-4xl font-bold my-12 w-96 text-left max-[639px]:pl-16 leading-snug lg:w-[40rem] lg:mx-auto lg:text-center">
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
      </div>

      <div>
        <input
          className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
          placeholder="Password *"
          id="password"
          type="password"
          {...register("password", {
            required: true,
          })}
        />
        <p className="text-[#737373] text-sm text-left pl-2 w-80 lg:w-96">
          {errors.password?.message}
        </p>
      </div>

      <div className="w-80 lg:w-96 text-left mx-auto mb-12 pl-3">
        <input className="text-[#737373] mr-2" type="checkbox" />
        <label className="text-[#737373] text-lg font-semibold">
          Remember Me
        </label>
      </div>

      <button
        className="w-80 mx-auto lg:w-96 h-16 bg-[#23A6F0] rounded-md text-[#FFFFFF] mb-20 font-semibold"
        type="login"
      >
        Submit
      </button>
    </form>
  );
}

export default LoginPage;
