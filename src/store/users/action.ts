import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersList1, getUsersList2 } from "./api";

//get users list from 2 apis by pages
export const getUsersListAction = createAsyncThunk("users/list", async () => {
  const response1 = await getUsersList1();
  const response2 = await getUsersList2();

  const list1 = await response1.data;
  const list2 = await response2.data;

  return [...list1.data, ...list2.data];
});
