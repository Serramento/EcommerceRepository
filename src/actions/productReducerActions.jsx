import axios from "axios";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCTLIST = "SET_PRODUCTLIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCHSTATE = "SET_FETCHSTATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";

export const setCategories = (category) => {
  return {
    type: SET_CATEGORIES,
    payload: category,
  };
};

export const setProductList = (productList) => {
  return {
    type: SET_PRODUCTLIST,
    payload: productList,
  };
};

export const setTotal = () => {
  return {
    type: SET_TOTAL,
  };
};

export const setFetchState = (state) => {
  return {
    type: SET_FETCHSTATE,
    payload: state,
  };
};

export const setLimit = () => {
  return {
    type: SET_LIMIT,
  };
};

export const setOffset = () => {
  return {
    type: SET_OFFSET,
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};

export const fetchCategories = () => (dispatch) => {
  axios
    .get("https://workintech-fe-ecommerce.onrender.com/categories")
    .then((res) => {
      console.log(res.data);
      dispatch(setCategories(res.data));
    });
};

export const fetchProducts = () => (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  axios
    .get("https://workintech-fe-ecommerce.onrender.com/products")
    .then((res) => {
      console.log(res.data);
      dispatch(setProductList(res.data.products));
      dispatch(setTotal(res.data.total));
      dispatch(setFetchState("FETCHED"));
    })
    .catch((err) => {
      console.log(err.response.message);
      dispatch(setFetchState("FAILED"));
    });
};

export const fetchFilteredProducts = (value) => (dispatch) => {
  axios
    .get(
      "https://workintech-fe-ecommerce.onrender.com/products?filter=" +
        { value }
    )
    .then((res) => {
      console.log(res.data);
      dispatch(setFilter(value));
    })
    .catch((err) => {
      console.log(err.response.message);
    });
};
