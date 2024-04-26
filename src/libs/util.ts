import Cookies from "js-cookie";
// cookie保存的天数
// @ts-ignore
import config from "@/libs/config";
import moment from "moment";

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

export const getBeautifyTime = (unixTime: number) => {
  const interval = Date.now() - unixTime;
  const arr: Array<Array<any>> = [
    ["刚刚", 1],
    ["+分前", 60 * 1000],
    ["+小时前", 3600 * 1000],
    ["+天前", 86400 * 1000],
    ["obj", 30 * 86400 * 1000]
  ];
  let result: string = "";
  for (const rule of arr) {
    if (interval / rule[1] >= 1) {
      if (rule[0].startsWith("+")) {
        result = Math.floor(interval / rule[1]) + rule[0].replace("+", "");
      } else if ("obj" === rule[0]) {
        result = moment(new Date(unixTime)).format("YYYY年MM月DD日");
      } else {
        result = rule[0];
      }
    } else {
      break;
    }
  }
  if ("1天前" === result) {
    result = "昨天";
  }
  return result;
};
