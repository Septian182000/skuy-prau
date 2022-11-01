import { combineReducers } from "@reduxjs/toolkit";
import todoSlice from "./pendakiSlice";
import jalurSlice from "./jalurSlice";

const rootReducers = combineReducers({
  pendaki: todoSlice,
  jalur: jalurSlice,
});

export default rootReducers;