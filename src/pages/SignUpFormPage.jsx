import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setRoles } from "../actions/clientReducerActions";

function SignUpFormPage() {
  const [customer, setCustomer] = useState("");

  const history = useHistory();

  const axiosInstance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
  });

  const dispatch = useDispatch();

  const {
    register,
    getValues,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role_id: "",

      store: {
        name: "",
        email: "",
        password: "",
        role_id: "",
        store: { storeName: "", storePhone: "", tax_no: "", bank_account: "" },
      },
    },
    mode: "onChange",
  });

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((response) => {
        const array = response.data;
        for (let i = 0; i < array.length; i++) {
          if (array[i].code === customer) {
            setValue(
              customer === "3" ? "role_id" : "store.role_id",
              array[i].id,
              {
                shouldValidate: true,
              }
            );
            break;
          }
          dispatch(setRoles(customer));
        }
      })
      .catch((error) => {
        console.error("Error fetching roles:", error);
      });
  }, [axiosInstance, customer, setValue]);

  const submitHandler = (data) => {
    const sentData =
      customer === "3"
        ? {
            name: data.name,
            email: data.email,
            password: data.password,
            role_id: "3",
          }
        : {
            name: data.store.name,
            email: data.store.email,
            password: data.store.password,
            role_id: "2",
            store: {
              storeName: data.store.store.storeName,
              storePhone: data.store.store.storePhone,
              tax_no: data.store.store.tax_no,
              bank_account: data.store.store.bank_account,
            },
          };
    axiosInstance
      .post("/signup", JSON.stringify(sentData), {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        alert("You need to click link in email to activate your account!");
        reset();
      })
      .catch((error) => {
        console.error(error.response.message);
        alert("Failed to verify email!");
      });
  };

  const handleCustomer = (event) => {
    const { value } = event.target;
    setCustomer(value);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="font-montserrat flex flex-col text-xl w-[26.5rem] lg:w-[80rem]"
    >
      <h2 className="text-[#252B42] text-4xl font-bold my-10 w-96 text-left max-[639px]:pl-16 leading-snug lg:w-[40rem] lg:mx-auto lg:text-center">
        Create Your Account
      </h2>
      <div className="lg:w-[55rem] lg:flex lg:flex-wrap lg:justify-evenly lg:mx-auto">
        <div>
          <input
            className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
            placeholder="Full Name *"
            id="name"
            type="text"
            {...register(customer === "3" ? "name" : "store.name", {
              required: true,
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
          <p className="text-[#737373] text-sm text-left pl-2">
            {customer === "3"
              ? errors.name?.message
              : errors.store?.name?.message}
          </p>
        </div>
        <div>
          <input
            className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
            placeholder="E-mail *"
            id="email"
            type="email"
            {...register(customer === "3" ? "email" : "store.email", {
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
          />
          <p className="text-[#737373] text-sm text-left pl-2">
            {customer === "3"
              ? errors.email?.message
              : errors.store?.email?.message}
          </p>
        </div>
        <div>
          <input
            className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
            placeholder="Password *"
            id="password"
            type="password"
            {...register(customer === "3" ? "password" : "store.password", {
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
            {customer === "3"
              ? errors.password?.message
              : errors.store?.password?.message}
          </p>
        </div>
        <div>
          <input
            className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
            placeholder="Enter Password Again *"
            id="passwordValidation"
            type="password"
            {...register("passwordValidation", {
              required: true,
              validate: (value) => {
                const password = getValues(
                  customer === "3" ? "password" : "store.password"
                );
                return value === password || "The passwords do not match";
              },
            })}
          />
          <p className="text-[#737373] text-sm text-left pl-2">
            {errors.passwordValidation?.message}
          </p>
        </div>

        <div>
          <select
            onChange={handleCustomer}
            className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md text-[#737373] mb-8"
          >
            <option value="3" className="bg-[#F9F9F9]">
              Customer
            </option>
            <option value="2" className="bg-[#F9F9F9]">
              Store
            </option>
          </select>
        </div>

        {customer === "2" && (
          <div>
            <div>
              <input
                className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
                placeholder="Store Name"
                id="storeName"
                type="text"
                {...register("store.store.storeName", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "Store name must be at least 3 characters",
                  },
                })}
              />
              <p className="text-[#737373] text-sm text-left pl-2">
                {errors.store?.store?.storeName?.message}
              </p>
            </div>
            <div className="flex flex-row max-[639px]:ml-12">
              <div className="w-16 lg:w-16 h-16 bg-[#F9F9F9] border-y-[2px] flex justify-center items-center border-l-[2px] border-[#E6E6E6] rounded-l-md text-[#737373] mb-8">
                +90
              </div>
              <div>
                <input
                  className="w-70 lg:w-80 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-y-[2px] border-r-[2px] border-[#E6E6E6] rounded-r-md placeholder-[#737373] mb-8"
                  placeholder="Store Phone"
                  id="phone"
                  type="digit"
                  {...register("store.store.storePhone", {
                    required: true,
                    pattern: {
                      value:
                        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                      message: "Please enter a valid number",
                    },
                  })}
                />
                <p className="text-[#737373] text-sm text-left pl-2">
                  {errors.store?.store?.storePhone?.message}
                </p>
              </div>
            </div>
            <div>
              <input
                className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
                placeholder="Tax Id"
                id="tax_no"
                type="digit"
                {...register("store.store.tax_no", {
                  required: true,
                  pattern: {
                    value: /^T.*\d{4}\V.*\d{6}$/i,
                    message: "Please enter a valid tax account number",
                  },
                })}
              />
              <p className="text-[#737373] text-sm text-left pl-2">
                {errors.store?.store?.tax_no?.message}
              </p>
            </div>
            <div>
              <input
                className="w-80 lg:w-96 h-16 pl-5 bg-[#F9F9F9] border-[2px] border-[#E6E6E6] rounded-md placeholder-[#737373] mb-8"
                placeholder="Bank Account"
                id="bank_account"
                type="digit"
                {...register("store.store.bank_account", {
                  required: true,
                  pattern: {
                    value: /^TR.*\d{26}$/i,
                    message: "Please enter a valid bank account number",
                  },
                })}
              />
              <p className="text-[#737373] text-sm text-left pl-2">
                {errors.store?.store?.bank_account?.message}
              </p>
            </div>
          </div>
        )}
      </div>
      <button
        className="w-80 mx-auto lg:w-96 h-16 bg-[#23A6F0] rounded-md text-[#FFFFFF]"
        type="register"
        disabled={isSubmitting}
        onClick={() => history.goBack()}
      >
        {isSubmitting && <i className="fa fa-spinner fa-spin mr-3"></i>}
        Register
      </button>

      <div className="text-[#737373] text-sm mb-20 mt-8 font-semibold">
        <p>
          Already have an account? Click to{" "}
          <Link className="text-[#23A6F0] underline font-semibold" to="/login">
            Login!
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUpFormPage;
