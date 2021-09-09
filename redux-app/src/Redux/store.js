import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import unicornReducer from "./unicornReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import UnicornService from "../UnicornService";
import HttpError from "../Errors/HttpError";

const service = new UnicornService();
const error = new HttpError();
const composed = composeWithDevTools(
  applyMiddleware(thunkMiddleware.withExtraArgument({ service, error }))
);

const store = createStore(unicornReducer, composed);

export default store;
