import axios from "@/libs/api.request";

export const getCurrentUser = () => {
  return axios.get("/user");
};

export const foucsUser = (data: any) => {
  return axios.post("/live/focusUser", data);
};

export const unfoucsUser = (data: any) => {
  return axios.post("/live/unfocusUser", data);
};
