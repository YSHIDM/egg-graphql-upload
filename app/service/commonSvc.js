/**
 * 角色管理
 */
const { Service } = require('egg')
// const { Op } = require('sequelize')

module.exports = class TodoNodeSvc extends Service {
  /**
   * 捕获异常统一接口
   * @param {string} ser service 名称
   * @param {string} func service 方法
   * @param {array} params 参数数组
   */
  async catchError(ser, func, params = []) {
    let result = {}
    try {
      const { code, data, message: resmessage } = await this.service[ser][func](...params)
      let rescode = 0
      if (code === 2000) {
        rescode = 200
      } else {
        rescode = code
      }
      result = { rescode, resmessage, data }
    } catch (err) {
      console.error(err)
      this.ctx.logger.error(err)
      if (err.code) {
        result = err
      }
      result = { rescode: 500 }
    }
    return this.ctx.helper.getInfo(result)
  }
}
