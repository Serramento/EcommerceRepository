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

export const setFetchState = () => {
  return async (dispatch) => {
    dispatch({
      type: SET_FETCHSTATE,
      payload: "FETCHING",
    });
    try {
      dispatch({
        type: SET_FETCHSTATE,
        payload: "FETCHED",
      });
    } catch (error) {
      dispatch({
        type: SET_FETCHSTATE,
        payload: "FAILED",
      });
    }
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
