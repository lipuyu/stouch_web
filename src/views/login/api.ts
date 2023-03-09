import axios from "@/libs/api.request";
import type { LoginForm } from "@/views/login/class";

export const signIn = (data: LoginForm) => {
  return axios.post("/user/login", data);
};
