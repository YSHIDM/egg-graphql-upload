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
    closeTodo(_root, { id }, ctx) {
      return ctx.connector.todo.closeTodo(id)
    },
    restoreTodo(_root, { id }, ctx) {
      return ctx.connector.todo.restoreTodo(id)
    },
    todoArchive(_root, { id }, ctx) {
      return ctx.connector.todo.todoArchive(id)
    },
    // addTodo(_root, { }, ctx) {
    //   return ctx.connector.todo.addTodo()
    // }
  },
  Query: {
    getAllTodo(_root, _, ctx) {
      return ctx.connector.todo.getAllTodo()
    },
  },
}
