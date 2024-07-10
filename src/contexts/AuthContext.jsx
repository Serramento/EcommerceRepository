import axios from "axios";
import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocalStorage } from "../hooks/UseLocalStorage";

const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useLocalStorage("token", {});
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  let isLoggedIn = authUser && authUser.token;

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

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
        dispatch(setUser(loginInfo));
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

  return (
    <AuthContext.Provider
      value={{ authenticate, isLoggedIn, handleRememberMe, authUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext();

export default AuthContextProvider;
