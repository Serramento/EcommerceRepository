import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setUser } from "../actions/clientReducerActions";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocalStorage } from "../hooks/UseLocalStorage";

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [authUser, setAuthUser] = useLocalStorage("token", {});
  const [rememberMe, setRememberMe] = useState(false);

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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/verify", {
        headers:
          user && user.token
            ? {
                Authorization: user.token,
              }
            : {},
      })
      .then((res) => {
        console.log(res.data);
        dispatch(setUser(data));
        axios.defaults.headers.common["Authorization"] = user.token;
        localStorage.setItem("token", user.token);
      })
      .catch((err) => {
        delete axios.defaults.headers.common["Authorization"];
        localStorage.removeItem("token");
        console.error(err.response.message);
      });
  }, [dispatch]);

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
        if (rememberMe === true) {
          setAuthUser(res.data);
        }
        if (history.go(-1)) {
          history.go(-1);
        } else {
          history.push("/");
        }
        toast.success("Successfully logged in!");
      })
      .catch((err) => {
        toast.error("There is an error in the login info, please check again!");
        console.error(err.response.message);
      });
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="font-montserrat flex flex-col text-xl w-[26.5rem] lg:w-[80rem]"
    >
      <h2 className="text-[#252B42] text-4xl font-bold my-12 w-96 text-left max-[639px]:pl-16 leading-snug lg:w-[40rem] lg:mx-auto lg:text-center">
        Login
      </h2>

      <div className="mb-8">
        <input
          className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373]"
          placeholder="E-mail *"
          id="email"
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />
        <p className="text-[#cd3434] text-lg font-semibold mt-2 w-80 lg:w-96 mx-auto text-left pl-3">
          {errors.email?.message}
        </p>
      </div>

      <div className="mb-8">
        <input
          className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373]"
          placeholder="Password *"
          id="password"
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            /*validate: {
              minLength: (value) =>
                value.length >= 8 ||
                "Password should has more than 8 characters",
              isCapitalLetter: (value) =>
                /[A-Z]/.test(value) ||
                "Password should has at least one capital letter",
              isLowerCaseLetter: (value) =>
                /[a-z]/.test(value) ||
                "Password should has at least one lower case letter",
              isContainNumber: (value) =>
                /\d/.test(value) || "Password should has at least one number",
            },*/
          })}
        />
        <p className="text-[#cd3434] text-lg font-semibold mt-2 w-80 lg:w-96 mx-auto text-left pl-3">
          {errors.password?.message}
        </p>
      </div>

      <div className="w-80 lg:w-96 text-left mx-auto mb-12 pl-3">
        <input
          className="text-[#737373] mr-2"
          type="checkbox"
          onClick={handleRememberMe}
        />
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
