'use strict'

class TodoConnector {
  constructor(ctx) {
    this.ctx = ctx
  }
  /**
   * 捕获异常统一接口
   * @param {string} func service 方法
   * @param {any[]} params 参数数组
   */
  async catchError(func, params = []) {
    return await this.ctx.service.commonSvc.catchError('todoSvc', func, params)
  }
  /**
   * 保存任务
   * @param  {...any} params 参数
   */
  async saveTodo(...params) {
    return await this.catchError('saveTodo', params)
  }
  /**
   * 按节点获取任务列表
   * @param  {...any} params 参数
   */
  async getTodoListByNode(...params) {
    return await this.catchError('getTodoListByNode', params)
  }
  /**
   * 按状态获取任务列表
   * @param  {...any} params 参数
   */
  async getTodoListByState(...params) {
    return await this.catchError('getTodoListByState', params)
  }
  /**
   * 按 id 删除任务
   * @param  {...any} params 参数
   */
  async deleteTodoById(...params) {
    return await this.catchError('deleteTodoById', params)
  }
  /**
   * 任务执行到下一步
   * @param  {...any} params 参数
   */
  async todoNext(...params) {
    return await this.catchError('todoNext', params)
  }
  /**
   * 完成任务
   * @param  {...any} params 参数
   */
  async todoDone(...params) {
    return await this.catchError('todoDone', params)
  }
  /**
   * 修改任务状态
   * @param  {...any} params 参数
   */
  async changeTodoState(...params) {
    return await this.catchError('changeTodoState', params)
  }
  /**
   * 按 id 获取任务
   * @param  {...any} params 参数
   */
  async getTodoById(...params) {
    return await this.catchError('byPk', params)
  }
}
module.exports = TodoConnector
