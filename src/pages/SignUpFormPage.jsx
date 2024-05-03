import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

function SignUpFormPage() {
  const instance = axios.create({
    baseURL: " https://workintech-fe-ecommerce.onrender.com",
    timeout: 1000,
    headers: {
      MyCustomHeader1: "1",
      MyCustomHeader2: "2",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordValidation: "",
      id: nanoid(5),
    },
    mode: "onChange",
  });

  const validateName = (value) => {
    return value.trim().length >= 3 || "İsim en az 3 karakter olmalıdır.";
  };

  return (
    <form>
      <div>
        <label>Name</label>
        <input
          className=""
          placeholder="Please enter your name"
          id="name"
          type="text"
          {...register("name", { validate: validateName })}
        />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <label>E-mail</label>
        <input
          className=""
          placeholder="Please enter your e-mail"
          id="email"
          type="text"
          {...register("email", { validate: validateName })}
        />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>Password</label>
        <input
          className=""
          placeholder="Please enter your password"
          id="password"
          type="text"
          {...register("password", { validate: validateName })}
        />
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <label>Password Validation</label>
        <input
          className=""
          placeholder="Please enter your password again"
          id="passwordValidation"
          type="text"
          {...register("password", { validate: validateName })}
        />
        <p>{errors.passwordValidation?.message}</p>
      </div>
      <div>
        <button className="" type="register" disabled={!isValid}>
          Register
        </button>
      </div>
    </form>
  );
}

export default SignUpFormPage;
