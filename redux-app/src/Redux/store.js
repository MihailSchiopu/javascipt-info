import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import unicornReducer from "./unicornReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composed = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(unicornReducer, composed);

export default store;