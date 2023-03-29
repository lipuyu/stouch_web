class BaseConfig {
  public baseUrl: string = "/";
  public socketAddr: string = "";
  public cookieExpires: number = 0;
  public ossUrl: string = "";
}

const configDev: BaseConfig = {
  baseUrl: "/api/",
  socketAddr: "ws://localhost:8000/api/websocket",
  cookieExpires: 86400,
  ossUrl: "https://stouch.oss-cn-beijing.aliyuncs.com/",
};

const configProd: BaseConfig = {
  baseUrl: "/api/",
  socketAddr: "ws://" + document.location.host + "/api/websocket",
  cookieExpires: 86400,
  ossUrl: "https://stouch.oss-cn-beijing.aliyuncs.com/",
};

const config: BaseConfig = import.meta.env.DEV ? configDev : configProd;

export default config;
