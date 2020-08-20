// const DataLoader = require('dataloader');

class CommonConnector {
  constructor(ctx) {
    this.ctx = ctx
    // this.user = ctx.state.user;
    this.service = ctx.service.commonSvc
    // if (!!this.user) {
    //   this.agentId = this.user.agentId;
    // }
  }
  /**
   * 捕获异常统一接口
   * @param {string} func service 方法
   * @param {any[]} params 参数数组
   */
  async catchError(func, params) {
    return await this.service.catchError('commonSvc', func, params)
  }
}

module.exports = CommonConnector
