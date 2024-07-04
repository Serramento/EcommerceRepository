import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useLocalStorage } from "../hooks/UseLocalStorage";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useLocalStorage("token", {});

  const history = useHistory();
  const dispatch = useDispatch();

  const [loggedIn, setLoggedIn] = useState(false);

  const authenticate = (loginInfo) => {
    axios
      .post(
        "https://workintech-fe-ecommerce.onrender.com/login",
        JSON.stringify(loginInfo),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res.data);
        dispatch(setUser(data));
        setLoggedIn(true);
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

  return (
    <AuthContext.Provider
      value={{ setAuthUser, authUser, authenticate, loggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext();

export default AuthContextProvider;
