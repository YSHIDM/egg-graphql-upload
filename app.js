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