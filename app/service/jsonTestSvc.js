/**
 * 角色管理
 */
const { Service } = require('egg');
const { Op } = require('sequelize');

module.exports = class FlowSvc extends Service {
    /**
     * 查询所有工作流程--按名称模糊查询
     * @param name 角色名称
     */
    async getJsonTestList(where) {
        const model = this.ctx.model.JsonTest;
        const jsonTestList = await model.findAll({
            where,
            order: [['createdAt', 'ASC']]
        });
        return jsonTestList.map(d => d.toJSON());
    }
}
