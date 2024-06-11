import { applyMiddleware, legacy_createStore as createStore } from "redux";
import * as clientReducer from "../reducers/clientReducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(() => {
  clientReducer, composeWithDevTools(applyMiddleware(thunk));
});
