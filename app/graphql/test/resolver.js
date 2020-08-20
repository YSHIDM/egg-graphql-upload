'use strict'

module.exports = {
  Mutation: {
    modifyRolePermission(_root, { id }, ctx) {
      return {
        rescode: 1,
        resmessage: [{ id }],
      }
    },
    // ===================================
    addTodo(_root, { todo }, _ctx) {
      console.log('todo', todo)
      return {
        rescode: 200,
        data: todo
      }
    },
    deleteTodo(_root, { text }, _ctx) {
      console.log(text + ' 被删除了');
      return {
        rescode: 200,
        data: null,
      }
    },
    updateTodo(_root, { text, done }, _ctx) {
      return {
        rescode: 200,
        data: {
          text,
          done,
        },
      }
    },
  },
  Query: {
    getPermissionList() {
      return {
        rescode: 2,
        resmessage: [{
          id: 1,
        }, {
          id: 2,
        }, {
          id: 3,
        },]
      }
      // return [{
      //   id: 1,
      // }, {
      //   id: 2,
      // }, {
      //   id: 3,
      // },]
    },
    getPermissionListForLogin() {
      return {
        rescode: 3,
        resmessage: 'String',
      }
    },
    getPermissionStateList() {
      return {
        rescode: 4,
        resmessage: 'String',
      }
    },

    getTodoList() {
      return {
        rescode: 200,
        data: [{
          text: '111',
          done: false,
        }, {
          text: '222',
          done: true,
        }, {
          text: '333',
          done: false,
        }, {
          text: '444',
          done: true,
        }, {
          text: '555',
          done: false,
        }, {
          text: '666',
          done: true,
        },]
      }
    },
    getTodo(_root, { text, done }, _ctx) {
      return {
        rescode: 200,
        data: [{
          text,
          done,
        },]
      }
    },
  },
}
