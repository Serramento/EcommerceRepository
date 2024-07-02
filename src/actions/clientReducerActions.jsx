import axios from "axios";
import { toast } from "react-toastify";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_LOGIN = "SET_LOGIN";

export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const setRoles = () => {
  return {
    type: SET_ROLES,
  };
};

export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};

export const setLanguage = (language) => {
  return {
    type: SET_LANGUAGE,
    payload: language,
  };
};

export const setLogin = () => (dispatch) => {
  axios
    .post("https://workintech-fe-ecommerce.onrender.com/login")
    .then((res) => {
      return dispatch(setUser(res.data));
    })
    .catch((err) => {
      toast.error("There is an error in the login info, please check again!");
      return console.log(err.response.message);
    });
};
