import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";

const rootReducer = combineReducers({
  clientReducer,
  productReducer,
  shoppingCartReducer,
});

export default rootReducer;
