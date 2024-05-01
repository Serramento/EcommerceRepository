import React from "react";
import axios from "axios";

function SignUpFormPage() {
  const instance = axios.create({
    baseURL: " https://workintech-fe-ecommerce.onrender.com",
    timeout: 1000,
    headers: {
      MyCustomHeader1: "1",
      MyCustomHeader2: "2",
    },
  });

  return <div>Sign Up</div>;
}

export default SignUpFormPage;
