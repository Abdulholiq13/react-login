import { combineReducers, legacy_createStore } from "redux";
import wishlist from "./wishlist";

const reducers = combineReducers({
  wishlist,
  cart,
  token,
});

export const store = legacy_createStore(reducers);
