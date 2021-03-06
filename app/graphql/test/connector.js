'use strict'

class PermissionConnector {
  constructor(ctx) {
    this.ctx = ctx
  }
  /**
   * 获取所有权限-无状态
   */
  async getPermissionList() {
    return {
      code: 'String',
      msg: 'String',
    }
  }
  /**
   * 获取用户所有权限状态-用于页面渲染
   */
  async getPermissionListForLogin() {
    return {
      code: 'String',
      msg: 'String',
    }
  }
  /**
   * 根据角色权限值获取权限状态-编辑权限时使用
   */
  async getPermissionStateList() {
    return {
      code: 'String',
      msg: 'String',
    }
  }
  /**
   * 修改角色权限值
   */
  async modifyRolePermission() {
    return {
      code: 'String',
      msg: 'String',
    }
  }
}
module.exports = PermissionConnector
