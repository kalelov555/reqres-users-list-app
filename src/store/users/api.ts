import { api } from "../../services/api";

export const getUsersList1 = async () => {
  return api.get("/users");
};

export const getUsersList2 = async () => {
  return api.get("/users?page=2");
};
