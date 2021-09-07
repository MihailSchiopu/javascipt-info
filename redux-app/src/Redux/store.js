import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import unicornReducer from "./unicornReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import UnicornService from "../UnicornService";

const service = new UnicornService();

const composed = composeWithDevTools(
  applyMiddleware(thunkMiddleware.withExtraArgument(service))
);

const store = createStore(unicornReducer, composed);

export default store;
