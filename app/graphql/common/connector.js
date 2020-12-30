const DataLoader = require('dataloader')
class CommonConnector {
  constructor(ctx) {
    this.ctx = ctx
    // this.user = ctx.state.user;
    this.service = ctx.service.commonSvc
    // if (!!this.user) {
    //   this.agentId = this.user.agentId;
    // }
    this.getTodoNodeTitleByNameLoader = new DataLoader(this.getTodoNodeTitlesByNames.bind(this))
  }
  /**
   * 捕获异常统一接口
   * @param {string} func service 方法
   * @param {any[]} params 参数数组
   */
  async catchError(func, params) {
    return await this.service.catchError('commonSvc', func, params)
  }

  // dataloader
  /**
   * 捕获异常统一接口
   * @param {string} func service 方法
   * @param {any[]} params 参数数组
   */
  async catchDataLoaderError(func, params) {
    return await this.service.catchDataLoaderError('commonSvc', func, params)
  }
  async getTodoNodeTitlesByNames(names) {
    return await this.catchDataLoaderError('getTodoNodeTitlesByNames', [names])
  }
  async getTodoNodeTitleByName(name) {
    if (!name) {
      return null
    }
    return this.getTodoNodeTitleByNameLoader.load(name).catch(e => {
      this.getTodoNodeTitleByNameLoader.clear(name)
      return e
    })
  }
}

module.exports = CommonConnector
