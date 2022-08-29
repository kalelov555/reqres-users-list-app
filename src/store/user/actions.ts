import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { AuthPayload } from "../../typings/user";
import { clearToken, getCurrentUserId } from "../../utils/common";
import { authMe, login, logout, register } from "./api";

export const loginAction = createAsyncThunk(
  "user/login",
  async ({ email, password, navigate }: AuthPayload) => {
    const response = await login(
      email as FormDataEntryValue,
      password as FormDataEntryValue
    );
    const userToken = await response.data.token;

    if (userToken) {
      Cookies.set("token", userToken);
      navigate("/");
    }

    return {
      userToken,
      email,
      password,
    };
  }
);

export const registerAction = createAsyncThunk(
  "user/register",
  async ({ email, password, navigate }: AuthPayload) => {
    const response = await register(
      email as FormDataEntryValue,
      password as FormDataEntryValue
    );

    const userToken = await response.data.token;

    if (userToken) {
      Cookies.set("token", userToken);
      navigate("/");
    }

    return {
      userToken,
      email,
      password,
    };
  }
);

export const getProfileAction = createAsyncThunk(
  "user/getProfile",
  async () => {
    const currentUserid = getCurrentUserId();
    const response = await authMe(currentUserid);

    const currentUser = await response.data;

    return currentUser.data;
  }
);

export const logoutAction = createAsyncThunk(
  "user/logout",
  async ({ navigate }: AuthPayload) => {
    clearToken();
    const response = await logout();
    navigate("/login");

    return response.data;
  }
);
