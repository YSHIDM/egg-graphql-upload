/* eslint valid-jsdoc: "off" */

'use strict';

const schema = require('../app/util/schema/schema');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1571712404706_1881';
  config.security = {
    csrf: {
      enable: false,
    },
  };
  // add your middleware config here
  // config.middleware = [ 'graphql' ];
  config.middleware = [ 'graphql', 'graphqlUploadKoa', 'basicGraphqlServer' ];
  // 配置grahql
  config.graphql = {
    router: '/graphql',
    app: true,
    agent: false,
    graphiql: true,
  };
  config.graphqlUploadKoa = { maxFileSize: 10000000, maxFiles: 10 };
  config.basicGraphqlServer = { schema };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
