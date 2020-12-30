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
      const { code, data, msg } = await this.service[ser][func](...params)

      result = { code, msg, data }
    } catch (err) {
      console.error(err)
      this.ctx.logger.error(err)
      if (err.code) {
        result = err
      }
      result = { code: 500 }
    }
    return this.ctx.helper.getInfo(result)
  }
  /**
   * 捕获 DataLoader 异常统一接口
   * @param service service 名称
   * @param func service 方法
   * @param params 参数数组
   */
  async catchDataLoaderError(service, func, params = []) {
    let result = {}
    try {
      result = await this.service[service][func](...params)
    } catch (err) {
      console.error(err)
      this.ctx.logger.error(err)
      if (err.code) {
        result = err
      }
      result = { code: this.STATUS_CODE.INTERNAL.RES.code }
    }
    return result
  }
  async getTodoNodeTitlesByNames(names){
    const allTodoNodeMap = await this.service.todoNodeSvc.getAllTodoNodeMap()
    const titles = names.map(name => allTodoNodeMap.get(name))
    return titles
  }
}
