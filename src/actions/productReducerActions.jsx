export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCTLIST = "SET_PRODUCTLIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCHSTATE = "SET_FETCHSTATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";

export const setCategories = () => {
  return {
    type: SET_CATEGORIES,
  };
};

export const setProductList = () => {
  return {
    type: SET_PRODUCTLIST,
  };
};

export const setTotal = () => {
  return {
    type: SET_TOTAL,
  };
};

export const setFetchState = () => {
  return {
    type: SET_FETCHSTATE,
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

export const setFilter = () => {
  return {
    type: SET_FILTER,
  };
};
