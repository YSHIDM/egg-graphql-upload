// const {EggAppConfig, PowerPartial} = require('egg')

module.exports = () => {
  /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
  const config = exports = {}

  config.sequelize = {
    dialect: 'postgres', // support: mysql, mariadb, postgres, mssql
    host: '192.168.199.54', // 118.190.84.62
    port: 5434,
    username: 'postgres',
    password: 'postgres',
    database: 'test',
    timezone: '+08:00',
    define: {
      underscored: false,
    },
  };
  config.redis = {
    client: {
      port: 6378,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: '123456',
      db: 0,
    },
  }

  return config
}
