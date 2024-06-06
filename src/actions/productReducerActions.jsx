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

export const setTotal = (total) => {
  return {
    type: SET_TOTAL,
    payload: total,
  };
};

export const setFetchState = (fetchState) => {
  return {
    type: SET_FETCHSTATE,
    payload: fetchState,
  };
};

export const setLimit = (limit) => {
  return {
    type: SET_LIMIT,
    payload: limit,
  };
};

export const setOffset = (offset) => {
  return {
    type: SET_OFFSET,
    payload: offset,
  };
};

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter,
  };
};
