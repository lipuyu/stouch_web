import axios from "axios";
import { getTicket } from "@/libs/util";

const request = axios.create({
  baseURL: "/api",
  timeout: 2000,
  headers: {
    app: "stouch",
    ticket: getTicket(),
  },
});

export default request;
