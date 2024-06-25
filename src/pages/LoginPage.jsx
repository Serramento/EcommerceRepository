import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function LoginPage() {
  return (
    <form className="font-montserrat flex flex-col text-xl w-[26.5rem] lg:w-[80rem]">
      <h2 className="text-[#252B42] text-4xl font-bold my-10 w-96 text-left max-[639px]:pl-16 leading-snug lg:w-[40rem] lg:mx-auto lg:text-center">
        Login
      </h2>
    </form>
  );
}

export default LoginPage;
