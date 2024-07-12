import { createStore, applyMiddleware, compose } from "redux";
import combineReducers from "./combineReducers";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers,
  composeEnhancers(applyMiddleware(thunk))
);

// module.exports= store;
export default store;