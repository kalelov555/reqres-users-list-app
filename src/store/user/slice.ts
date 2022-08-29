import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../typings/user";
import {
  getProfileAction,
  loginAction,
  logoutAction,
  registerAction,
} from "./actions";

export type UserState = {
  user: User;
  status: "loading" | "idle" | "succeeded";
};

const initialState: UserState = {
  user: {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  },
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(registerAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(getProfileAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProfileAction.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.status = "idle";
      });
  },
});

export default userSlice.reducer;
