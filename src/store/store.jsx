import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "../reducers/combineReducers";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
