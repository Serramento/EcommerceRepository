import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { clientreducer } from "../reducers/clientReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  clientreducer,
  composeWithDevTools(applyMiddleware(thunk))
);
