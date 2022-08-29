import Cookies from "js-cookie";

export const getCurrentUserId = () => {
  const token = Cookies.get("token");

  const id = token?.slice(16);
  if (id) return parseInt(id);
  return 0;
};

export const clearToken = () => {
  Cookies.remove("token");
};
