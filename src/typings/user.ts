import { NavigateFunction } from "react-router-dom";

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type AuthPayload = {
  email?: FormDataEntryValue | null;
  password?: FormDataEntryValue | null;
  navigate: NavigateFunction;
};
