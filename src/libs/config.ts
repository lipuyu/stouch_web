class BaseConfig {
  public baseUrl: string = "/";
  public socketAddr: string = "";
  public cookieExpires: number = 0;
}

const configDev: BaseConfig = {
  baseUrl: "/api/",
  socketAddr: "ws://localhost:8000/api/websocket",
  cookieExpires: 86400,
};

const configProd: BaseConfig = {
  baseUrl: "/api/",
  socketAddr: "ws://" + document.location.host + "/api/websocket",
  cookieExpires: 86400,
};

const config: BaseConfig = import.meta.env.DEV ? configDev : configProd;

export default config;
