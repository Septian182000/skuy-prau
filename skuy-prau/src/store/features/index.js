import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./pendakiSlice";

const rootReducers = combineReducers({
  pendaki: todoSlice,
});

export default rootReducers;