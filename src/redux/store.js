import { createStore, combineReducers } from "redux";
import appReducer from "./appReducer";
const mainReducer = combineReducers({ appReducer });

const store = createStore(mainReducer);

export default store;
