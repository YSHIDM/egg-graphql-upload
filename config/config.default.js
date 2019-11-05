/* eslint valid-jsdoc: "off" */

'use strict';

const schema = require('../app/util/schema/schema');
const path = require('path')
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
  // 配置前端静态文件路径
  config.static = {
    prefix: '',
    dir: [appInfo.baseDir + '/app/public/dist', appInfo.baseDir + '/images']
  };
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  config.multipart = {
    mode: 'stream',
    fileModeMatch:/^\/images$/,
    fileSize: '5mb',
    tmpdir: path.join(appInfo.baseDir, '/images'),
    whitelist: [
      '.jpg', '.jpeg', // image/jpeg
      '.png', // image/png, image/x-png
    ],
    cleanSchedule: {
      // run tmpdir clean job on every day 04:30 am
      // cron style see https://github.com/eggjs/egg-schedule#cron-style-scheduling
      cron: '0 30 4 * * *',
    },
  };
  // add your middleware config here
  // config.middleware = [ 'graphql' ];
  // config.middleware = ['graphql', 'graphqlUploadKoa', 'basicGraphqlServer'];
  config.authPath = ['/', '/images'];
  // 配置grahql
  config.graphql = {
    router: '/graphql',
    app: true,
    agent: false,
    graphiql: true,
  };
  config.graphqlUploadKoa = { maxFileSize: 10000000, maxFiles: 10 };
  config.basicGraphqlServer = { schema };
  config.sequelize = {
    dialect: 'postgres',
    host: '127.0.0.1',
    port: 5433,
    username: 'postgres',
    password: 'postgres',
    database: 'assistant',
    timezone: '+08:00',
    define: {
      underscored: false,
    },
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
