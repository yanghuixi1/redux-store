import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import shopSlice from "../slices/storeSlice";

const reducer = combineReducers({
  shop: shopSlice,
});

const store = configureStore({
  reducer,
});

export default store;
