import { api } from "../../services/api";

export const login = async (
  email: FormDataEntryValue,
  password: FormDataEntryValue
) => {
  return api.post("/login", {
    email,
    password,
  });
};

export const register = async (
  email: FormDataEntryValue,
  password: FormDataEntryValue
) => {
  return api.post("/register", {
    email,
    password,
  });
};

export const authMe = async (id: number) => {
  return api.get(`/users/${id}`);
};

export const logout = async () => {
  return api.get("/unknown/1");
};
