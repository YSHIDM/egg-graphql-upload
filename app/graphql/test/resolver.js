module.exports = {
  Mutation: {
    modifyRolePermission(_root, { id }) {
      return {
        code: 1,
        msg: [{ id }],
      }
    },
  },
  Query: {
    getPermissionList() {
      return {
        code: 2,
        msg: [{
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
        code: 3,
        msg: 'String',
      }
    },
    getPermissionStateList() {
      return {
        code: 4,
        msg: 'String',
      }
    },
  },
}
