'use strict'

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  'apollo-server': {
    enable: true,
    package: 'egg-apollo-server',
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  // 跨域
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  io: {
    enable: true,
    package: 'egg-socket.io',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
}
