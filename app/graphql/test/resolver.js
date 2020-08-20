module.exports = {
  Mutation: {
    modifyRolePermission(_root, { id }) {
      return {
        rescode: 1,
        resmessage: [{ id }],
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
  },
}
