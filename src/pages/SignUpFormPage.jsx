import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

function SignUpFormPage() {
  const [customer, setCustomer] = useState(true);

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
      customerAdmin: {
        name: "",
        email: "",
        password: "",
        roleId: nanoid(5),
      },
      store: {
        name: "",
        email: "",
        password: "",
        roleId: nanoid(5),
        store: { name: "", phone: "", tax_no: "", bank_account: "" },
      },
    },
    mode: "onChange",
  });

  const handleCustomer = (event) => {
    const { value } = event.target;
    value === "store" ? setCustomer(false) : setCustomer(true);
  };

  const validateName = (value) => {
    return value.trim().length >= 3 || "İsim en az 3 karakter olmalıdır.";
  };

  return (
    <form className="font-montserrat text-xl w-[26.5rem] lg:w-[80rem]">
      <h2 className="text-[#252B42] text-4xl font-bold my-10 w-96 text-left max-[1023px]:pl-16 leading-snug lg:w-[40rem] lg:mx-auto lg:text-center">
        Create Your Account
      </h2>
      <div className="lg:w-[55rem] lg:flex lg:flex-wrap lg:justify-evenly lg:mx-auto">
        <div>
          <input
            className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
            placeholder="Full Name *"
            id="name"
            type="text"
            {...register("name", { validate: validateName })}
          />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <input
            className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
            placeholder="E-mail *"
            id="email"
            type="email"
            {...register("email", { validate: validateName })}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input
            className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
            placeholder="Password *"
            id="password"
            type="password"
            {...register("password", { validate: validateName })}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <input
            className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
            placeholder="Enter Password Again *"
            id="passwordValidation"
            type="text"
            {...register("password", { validate: validateName })}
          />
          <p>{errors.passwordValidation?.message}</p>
        </div>

        <div>
          <select
            onChange={handleCustomer}
            className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md text-[#737373] mb-8"
          >
            <option value="customer" className="bg-[#F9F9F9]">
              Customer
            </option>
            <option value="store" className="bg-[#F9F9F9]">
              Store
            </option>
          </select>
        </div>

        {customer === false && (
          <div>
            <div>
              <input
                className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
                placeholder="Store Name"
                id="storeName"
                type="text"
                {...register("storeName", { validate: validateName })}
              />
              <p>{errors.name?.message}</p>
            </div>
            <div>
              <input
                className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
                placeholder="Store Phone"
                id="phone"
                type="text"
                {...register("phone", { validate: validateName })}
              />
              <p>{errors.name?.message}</p>
            </div>
            <div>
              <input
                className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
                placeholder="Tax Id"
                id="tax_no"
                type="text"
                {...register("tax_no", { validate: validateName })}
              />
              <p>{errors.name?.message}</p>
            </div>
            <div>
              <input
                className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
                placeholder="Bank Account"
                id="bank_account"
                type="text"
                {...register("bank_account", { validate: validateName })}
              />
              <p>{errors.name?.message}</p>
            </div>
          </div>
        )}
      </div>
      <button
        className="w-80 lg:w-96 h-16 bg-[#23A6F0] rounded-md text-[#FFFFFF] mb-20"
        type="register"
        disabled={!isValid}
      >
        Register
      </button>
    </form>
  );
}

export default SignUpFormPage;
