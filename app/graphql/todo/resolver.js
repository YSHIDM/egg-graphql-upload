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
    invalidateTodo(_root, { id }, ctx) {
      return ctx.connector.todo.invalidateTodo(id)
    },
    todoRecycle(_root, { id }, ctx) {
      return ctx.connector.todo.todoRecycle(id)
    },
    todoArchive(_root, { id }, ctx) {
      return ctx.connector.todo.todoArchive(id)
    },
  },
  Query: {
    getAllTodo(_root, { }, ctx) {
      return ctx.connector.todo.getAllTodo()
    },
  },
}
