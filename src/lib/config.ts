const BaseConfigDev: object = {
  baseUrl: "/api/"
};

const BaseConfigProd: object = {
  baseUrl: "/api/"
};

let BaseConfig: object;
if (import.meta.env.DEV) {
  BaseConfig = BaseConfigDev;
} else {
  BaseConfig = BaseConfigProd;
}

export default BaseConfig;
