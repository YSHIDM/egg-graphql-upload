'use strict';

module.exports = {
  Mutation: {
    modifyRolePermission() {
      return {
        rescode: 'String',
        resmessage: 'String',
      };
    },
  },
  Query: {
    getPermissionList() {
      return {
        rescode: 'String',
        resmessage: 'String',
      };
    },
    getPermissionListForLogin() {
      return {
        rescode: 'String',
        resmessage: 'String',
      };
    },
    getPermissionStateList() {
      return {
        rescode: 'String',
        resmessage: 'String',
      };
    },
  },
};
