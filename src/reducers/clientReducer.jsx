import {
  SET_USER,
  SET_ROLES,
  SET_THEME,
  SET_LANGUAGE,
} from "../actions/clientReducerActions.jsx";
import movies from "../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };

    case SET_ROLES:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case SET_THEME:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    case SET_LANGUAGE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
