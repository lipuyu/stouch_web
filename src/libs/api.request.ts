import axios, { type AxiosResponse } from "axios";
import { getTicket } from "@/libs/util";

const request = axios.create({
  baseURL: "/api",
  timeout: 2000,
  headers: {
    app: "stouch",
    ticket: getTicket(),
  },
});

request.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default request;
