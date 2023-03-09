class BaseConfig {
  public baseUrl: string | undefined;
  public socketAddr: string | undefined;
  public cookieExpires: number | undefined;
}

const configDev: BaseConfig = {
  baseUrl: "/api/",
  socketAddr: "/api/websocket",
  cookieExpires: 86400,
};

const configProd: BaseConfig = {
  baseUrl: "/api/",
  socketAddr: "/api/websocket",
  cookieExpires: 86400,
};

const config: BaseConfig = import.meta.env.DEV ? configDev : configProd;

export default config;
