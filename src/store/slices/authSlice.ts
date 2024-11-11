// src/store/slices/authSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: {
    //user type tanımlanması gerek TODO
    id: string;
    name: string;
    email: string;
  } | null;
  token: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducers = {
  loginSuccess(
    state: AuthState,
    action: PayloadAction<{ user: AuthState["user"]; token: string }>
  ) {
    state.isAuthenticated = true;
    state.user = action.payload.user;
    state.token = action.payload.token;
  },
  logout(state: AuthState) {
    state.isAuthenticated = false;
    state.user = null;
    state.token = null;
  },
  updateUser(state: AuthState, action: PayloadAction<AuthState["user"]>) {
    state.user = action.payload;
  },
};
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers,
});

export const { loginSuccess, logout, updateUser } = AuthSlice.actions;
export const { actions, reducer } = AuthSlice;
