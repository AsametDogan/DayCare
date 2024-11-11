import { combineReducers } from "@reduxjs/toolkit";
import { reducer as modalReducer } from "./slices/modalSlice";
import { reducer as authReducer } from "./slices/authSlice";

export const rootReducer = combineReducers({
  Modal: modalReducer,
  Auth: authReducer,
});
