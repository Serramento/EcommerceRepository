import axios from "axios";
import { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContextProvider = ({ children }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [loggedIn, setLoggedIn] = useState(false);

  const authenticate = (loginInfo) => {
    axios
      .post("https://workintech-fe-ecommerce.onrender.com/login", loginInfo, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(setUser(loginInfo));
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
    <AuthContext.Provider value={{ authenticate, loggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthContext = createContext();

export default AuthContextProvider;
