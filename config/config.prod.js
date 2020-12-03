// const {EggAppConfig, PowerPartial} = require('egg')

module.exports = () => {
  /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
  const config = exports = {}

  config.sequelize = {
    dialect: 'postgres',
    host: '115.28.138.4',
    port: 5433,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    timezone: '+08:00',
    define: {
      underscored: false,
    },
  }
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