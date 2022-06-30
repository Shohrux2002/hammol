import { createStore } from "redux";
import thunk from "redux-thunk";
import { applyMiddleware, compose } from "redux";
import allReducers, { initialState } from "./reducers/reducser";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
