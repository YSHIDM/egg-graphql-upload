module.exports = {
  Mutation: {
    saveTodoNode(_root, { obj }, ctx) {
      return ctx.connector.todoNode.saveTodoNode(obj)
    },
  },
  Query: {
    getAllTodoNode(_root, _obj, ctx) {
      return ctx.connector.todoNode.getAllTodoNode()
    },
  },
}
