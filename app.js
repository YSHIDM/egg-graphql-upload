// app.js
class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  configWillLoad() {
  }

  async didLoad() {
  }

  async willReady() {

  }

  async didReady() {
    this.app.model.sync()
  }

  async serverDidReady() {

  }
}

module.exports = AppBootHook;

// module.exports = app => {
//   app.beforeStart(async () => {
//       // 从配置中心获取 MySQL 的配置
//       // { host: 'mysql.com', port: '3306', user: 'test_user', password: 'test_password', database: 'test' }
//       await app.model.sync({ force: true });
//   });
// };