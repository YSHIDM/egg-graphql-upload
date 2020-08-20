'use strict'

module.exports = {
  Mutation: {
    saveTodo(_root, { obj }, ctx) {
      return ctx.connector.todo.saveTodo(obj)
    },
    deleteTodoById(_root, { id }, ctx) {
      return ctx.connector.todo.deleteTodoById(id)
    },
    todoNext(_root, { id }, ctx) {
      return ctx.connector.todo.todoNext(id)
    },
    todoDone(_root, { id }, ctx) {
      return ctx.connector.todo.todoDone(id)
    },
    changeTodoState(_root, { id, state }, ctx) {
      return ctx.connector.todo.changeTodoState(id, state)
    },
  },
  Query: {
    getTodoListByNode(_root, { node }, ctx) {
      return ctx.connector.todo.getTodoListByNode(node)
    },
    getTodoListByState(_root, { state }, ctx) {
      return ctx.connector.todo.getTodoListByState(state)
    },
    getTodoById(_root, { id }, ctx) {
      return ctx.connector.todo.getTodoListByState(id)
    },
  },
}
