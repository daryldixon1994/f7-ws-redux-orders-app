import { createStore, combineReducers } from "redux";
import appReducer from "./appReducer";
const mainReducer = combineReducers({ appReducer });

const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
