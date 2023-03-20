import axios, { type AxiosResponse } from "axios";

const request = axios.create({
  baseURL: "/api",
  timeout: 2000,
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
