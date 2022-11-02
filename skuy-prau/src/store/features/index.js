import { combineReducers } from "@reduxjs/toolkit";
import pendakiSlice from "./pendakiSlice";
import jalurSlice from "./jalurSlice";

const rootReducers = combineReducers({
  pendaki: pendakiSlice,
  jalur: jalurSlice,
});

export default rootReducers;