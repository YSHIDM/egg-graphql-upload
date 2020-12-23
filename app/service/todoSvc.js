/**
 * 角色管理
 */
const { Service } = require('egg')
// const { Op } = require('sequelize')

module.exports = class TodoSvc extends Service {
  /**
   * 添加任务
   * @param {any} obj 任务
   */
  async addTodo(obj) {
    const model = this.ctx.model.Todo
    obj.id = this.app['genId']('TODO')
    obj.node = 'todo'
    obj.isArchive = false
    obj.isClose = false
    // obj.creator = this.ctx.state.user.userId;
    return await model.create(obj).then(d => d.toJSON())
  }
  /**
   * 修改任务
   * @param {any} obj 任务
   */
  async updateTodo(obj) {
    const model = this.ctx.model.Todo
    // obj.modifier = this.ctx.state.user.userId;
    await model.update(obj, {
      where: {
        id: obj.id
      },
    })
    return this.byPk(obj.id)
  }
  /**
   * 按主键查询审批数据
   * @param id 主键
   */
  async byPk(id) {
    const model = this.ctx.model.Todo
    let todo = await model.findByPk(id)
    if (todo) {
      todo = todo.toJSON()
    } else {
      todo = null
    }
    return todo
  }
  /**
   * 删除任务
   * @param {any} where 条件
   */
  async deleteTodo(where) {
    const model = this.ctx.model.Todo
    return await model.destroy({ where })
  }
  /**
   * 查询所有工作流程--按名称模糊查询
   * @param name 角色名称
   */
  async getTodoList(where) {
    const model = this.ctx.model.Todo
    const todoList = await model.findAll({
      where,
      order: [['createdAt', 'DESC']]
    })
    return todoList.map(d => d.toJSON())
  }
  /**
   * 保存任务
   * @param {any} obj
   */
  async saveTodo(obj) {
    let todo = null
    if (!obj.id) {
      todo = await this.addTodo(obj)
    } else {
      todo = await this.updateTodo(obj)
    }
    return { code: 2000, data: todo }
  }
  /**
   * 获取使用中的任务列表
   */
  async getAllTodo() {
    const data = await this.getTodoList()
    return { code: 2000, data }
  }
  /**
   * 按 id 删除任务
   * @param {string} id 任务 id
   */
  async deleteTodoById(id) {
    await this.deleteTodo({ id })
    return { code: 2000 }
  }
  /**
   * 任务执行到下一步
   * @param {string} id 任务 id
   */
  async todoNext(id) {
    const nextType = {
      todo: 'inProgress',
      inProgress: 'testing',
      testing: 'done',
    }
    let where = {}
    const todo = await this.byPk(id)
    if (!nextType[todo.node]) {
      return { code: 8000 }
    } else {
      where = { id, node: nextType[todo.node] }
    }

    const data = await this.updateTodo(where)
    return { code: 2000, data }
  }
  /**
   * 完成任务
   * @param {string} id 任务 id
   */
  async todoDone(id) {
    const data = await this.updateTodo({ id, node: 'done' })
    return { code: 2000, data }
  }
  /**
   * 废弃任务
   * @param {string} id 任务ID
   */
  async closeTodo(id){
    const data = await this.updateTodo({ id, isClose: true })
    return { code: 2000, data }
  }
  /**
   * 还原任务
   * @param {string} id 任务ID
   */
  async restoreTodo(id){
    const data = await this.updateTodo({ id, isClose: false })
    return { code: 2000, data }
  }
  /**
   * 归档任务
   * @param {string} id 任务ID
   */
  async todoArchive(id){
    const data = await this.updateTodo({ id, isArchive: true })
    return { code: 2000, data }
  }
}
