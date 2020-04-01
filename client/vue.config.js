let apiHost;

switch (process.env.APP_ENV) {
  case "prod":
    apiHost = JSON.stringify("vps809385.ovh.net");
    break;
  case "local":
    apiHost = JSON.stringify("localhost:3000");
    break;
  default:
    apiHost = JSON.stringify("localhost:3000");
    break;
}

module.exports = {
  chainWebpack: config => {
    config.plugin("define").tap(definitions => {
      definitions[0] = Object.assign(definitions[0], {
        __API__: apiHost
      });
      return definitions;
    });
  }
};
