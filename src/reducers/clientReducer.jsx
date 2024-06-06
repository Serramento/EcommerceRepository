import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
} from "../actions/clientReducerActions.jsx";

const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "",
  language: "",
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        addressList: [...state.addressList, action.payload],
        creditCards: [...state.creditCards, action.payload],
      };

    case SET_ROLES:
      return {
        ...state,
        roles: [...state.roles, action.payload],
      };

    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};

export default clientReducer;
