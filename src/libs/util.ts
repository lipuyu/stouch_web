import Cookies from "js-cookie";
// cookie保存的天数
// @ts-ignore
import config from "@/libs/config";

const { cookieExpires } = config;

export const TOKEN_KEY = "ticket";

export const setTicket = (ticket: any) => {
  Cookies.set(TOKEN_KEY, ticket, { expires: cookieExpires });
};
export const setApp = () => {
  Cookies.set("app", "stouch");
};

export const getTicket = (): string => {
  const ticket = Cookies.get(TOKEN_KEY);
  if (ticket) return ticket;
  else return "";
};

export const setTitle = (resTitle: string) => {
  window.document.title = resTitle;
};
