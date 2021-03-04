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
  async batchTodoNodeList(objList) {
    const objArray = objList.map((obj, i) => {
      obj.id = this.app['genId']('TONO')
      obj.sort = i
      return obj
    })
    const model = this.ctx.model.TodoNode
    return await model.bulkCreate(objArray)
      .then(data => data.map(d => d.toJSON()))
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
  async deleteTodoNode(where = {}) {
    const model = this.ctx.model.TodoNode
    const length = await model.destroy({ where })
    return { code: 2000, data: length }
  }

  async saveAllTodoNode(objList) {
    await this.deleteTodoNode()
    let data = await this.batchTodoNodeList(objList)
    data = data.sort((todoNode1, todoNode2) => todoNode1.sort - todoNode2.sort)
    return { code: 2000, data }
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
