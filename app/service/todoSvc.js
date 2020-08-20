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
    obj.state = 'none'
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
      order: [['createdAt', 'ASC']]
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
   * 按节点获取任务列表
   * @param {string} node 任务类型
   */
  async getTodoListByNode(node) {
    return this.getTodoList({ node, state: 'none' })
  }
  /**
   * 按状态获取任务列表
   * @param {string} state 任务状态
   */
  async getTodoListByState(state) {
    return this.getTodoList({ state })
  }
  /**
   * 按 id 删除任务
   * @param {string} id 任务 id
   */
  async deleteTodoById(id) {
    return this.deleteTodo({ id })
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
    const todo = await this.byPk(id)
    const data = await this.updateTodo({ id, type: nextType[todo.type] })
    return { code: 2000, data }
  }
  /**
   * 完成任务
   * @param {string} id 任务 id
   */
  async todoDone(id) {
    const data = await this.updateTodo({ id, type: 'done' })
    return { code: 2000, data }
  }
  /**
   * 修改任务状态
   * @param {string} id 任务 id
   * @param {string} state 任务状态
   */
  async changeTodoState(id,state) {
    const data = await this.updateTodo({ id, state })
    return { code: 2000, data }
  }
}
