import { applyMiddleware, legacy_createStore as createStore } from "redux";
import clientreducer from "../reducers/clientReducer";
import productReducer from "../reducers/productReducer";
import shoppingCartReducer from "../reducers/shoppingCartReducer";
import logger from "redux-logger";

export const store = createStore(clientreducer, applyMiddleware(logger));
