'use strict'

class TodoNodeConnector {
  constructor(ctx) {
    this.ctx = ctx
  }
  /**
   * 捕获异常统一接口
   * @param {string} func service 方法
   * @param {any[]} params 参数数组
   */
  async catchError(func, params = []) {
    return await this.ctx.service.commonSvc.catchError('todoNodeSvc', func, params)
  }
  /**
   * 保存任务节点列表
   * @param  {...any} params 参数
   */
  async saveAllTodoNode(...params) {
    return await this.catchError('saveAllTodoNode', params)
  }
  /**
   * 获取所有任务节点
   */
  async getAllTodoNode() {
    return await this.catchError('getAllTodoNode')
  }
}
module.exports = TodoNodeConnector
