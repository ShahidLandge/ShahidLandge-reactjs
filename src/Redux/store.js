import { combineReducers, createStore } from "redux";
import ProductReducer from "./reducers/ProductReducer";

const rootReducers = combineReducers({
  ProductReducer
});

export const store = createStore(rootReducers);
