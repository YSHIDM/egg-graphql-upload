/**
 * 角色管理
 */
const { Service } = require('egg')
// const { Op } = require('sequelize')

module.exports = class TodoNodeSvc extends Service {
  /**
   * 添加任务类型
   * @param {any} obj 任务
   */
  async addTodoNode(obj) {
    const model = this.ctx.model.TodoNode
    obj.id = this.app['genId']('TONO')
    // obj.creator = this.ctx.state.user.userId;
    return await model.create(obj).then(d => d.toJSON())
  }
  /**
   * 修改任务
   * @param {any} obj 任务
   */
  async updateTodoNode(obj) {
    const model = this.ctx.model.TodoNode
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
    const model = this.ctx.model.TodoNode
    let todoNode = await model.findByPk(id)
    if (todoNode) {
      todoNode = todoNode.toJSON()
    } else {
      todoNode = null
    }
    return todoNode
  }
  /**
   * 查询所有工作流程--按名称模糊查询
   * @param name 角色名称
   */
  async getTodoNodeList(where) {
    const model = this.ctx.model.TodoNode
    const todoNodeList = await model.findAll({
      where,
      order: [['createdAt', 'ASC']]
    })
    return todoNodeList.map(d => d.toJSON())
  }
  // async deleteTodoNode() {
  //   const model = this.ctx.model.TodoNode
  //   const length = await model.destroy({ where: { id: 'TONOxjpxPXfV8a' } })
  //   return { code: 2000, data: length }
  // }

  /**
   * 保存任务节点
   * @param {any} obj
   */
  async saveTodoNode(obj) {
    let todoNode = null
    if (!obj.id) {
      todoNode = await this.addTodoNode(obj)
    } else {
      todoNode = await this.updateTodoNode(obj)
    }
    return { code: 2000, data: todoNode }
  }
  /**
   * 获取所有任务节点
   * @param {string} type 任务类型
   */
  async getAllTodoNode() {
    const data = await this.getTodoNodeList()
    return { code: 2000, data }
  }
  async getAllTodoNodeMap() {
    const data = await this.getTodoNodeList()
    const allTodoNodeMap = new Map()
    data.forEach(todoNode => {
      allTodoNodeMap.set(todoNode.name, todoNode.alias || todoNode.title)
    })
    return allTodoNodeMap
  }
}
