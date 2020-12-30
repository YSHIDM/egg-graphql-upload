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
   * 获取使用中的任务列表
   */
  async getAllTodo() {
    return await this.catchError('getAllTodo')
  }
  /**
   * 按 id 获取待办
   * @param {string} id 待办 id
   */
  async getTodoById(id) {
    return await this.catchError('getTodoById',[id])
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
   * 废弃任务
   * @param  {...any} params 参数
   */
  async closeTodo(...params) {
    return await this.catchError('closeTodo', params)
  }
  /**
   * 还原任务
   * @param  {...any} params 参数
   */
  async restoreTodo(...params) {
    return await this.catchError('restoreTodo', params)
  }
  /**
   * 归档任务
   * @param  {...any} params 参数
   */
  async todoArchive(...params) {
    return await this.catchError('todoArchive', params)
  }
  async addTodo(){
    this.ctx.app.messenger.sendToAgent('addTodo')
    return this.ctx.helper.getInfo({ code: 2000 })
  }
}
module.exports = TodoConnector
