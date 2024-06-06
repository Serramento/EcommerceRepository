import axios from "axios";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

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

export const fetchRoles = () => (dispatch) => {
  axios
    .get("https://workintech-fe-ecommerce.onrender.com/roles")
    .then((res) => {
      return dispatch(setRoles(res.data));
    })
    .catch((err) => {
      return console.error("Error fetching roles:", err);
    });
};
