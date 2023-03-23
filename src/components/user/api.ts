import axios from "@/libs/api.request";

export const getCurrentUser = () => {
  return axios.get("/user");
};
