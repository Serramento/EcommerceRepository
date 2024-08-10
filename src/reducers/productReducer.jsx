import {
  SET_CATEGORIES,
  SET_PRODUCTLIST,
  SET_TOTAL,
  SET_FETCHSTATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
} from "../actions/productReducerActions.jsx";

const initialState = {
  categories: [],
  productList: [],
  total: null,
  limit: 25,
  offset: 0,
  filter: {},
  fetchState: "NOT_FETCHED",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case SET_PRODUCTLIST:
      return {
        ...state,
        productList: action.payload,
      };

    case SET_TOTAL:
      return {
        ...state,
        total: state.productList.length,
      };

    case SET_LIMIT:
      return {
        ...state,
        limit: state.productList.length < 25 ? state.productList.length : 25,
      };

    case SET_OFFSET:
      return {
        ...state,
        offset: Math.ceil(state.productList.length / 25),
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case SET_FETCHSTATE:
      return {
        ...state,
        fetchState: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
