const { Service } = require('egg')
// const { Op } = require('sequelize')

module.exports = class ImageStoreSvc extends Service {

  /**
     * 批量记录图片文件信息
     * @param {array} records 图片信息数组
     */
  async bulkCreate(records) {
    const { ctx, app } = this
    const model = ctx.model.ImageStore

    records.map((obj) => obj['id'] = app['genId']('IMG'))

    return await model.bulkCreate(records).then(data => data.map(d => d.toJSON()))
  }
  /**
     * 记录图片文件信息
     * @param {*} imageInfo 图片信息
     */
  async saveImageInfo(imageInfo) {
    const { ctx, app } = this
    const model = ctx.model.ImageStore

    imageInfo['id'] = app['genId']('IMG')
    await model.create(imageInfo)
    return await this.byPk(imageInfo['id'])
  }
  /**
     * 
     * @param {string} foreignKey 外键
     * @param {*} sourceType 来源类型
     */
  async getImageByForeign(foreignKey, sourceType) {
    const model = this.ctx.model.ImageStore
    return await model.findAll({
      where: {
        foreignKey,
        sourceType
      }
    })
  }
  /**
     * 修改文件信息
     * @param {any} imageInfo 图片信息
     */
  async uploadImageByForeignKey(imageInfo) {
    const model = this.ctx.model.ImageStore
    return await model.update(imageInfo, {
      where: {
        id: imageInfo.id
      }
    })
  }
  /**
     * 按主键查询
     * @param {string} pk 主键
     */
  async byPk(pk) {
    const model = this.ctx.model.ImageStore
    return await model.findByPk(pk)
  }
  /**
     * 按时间分组获取文件大小及上传日期
     * @param {string} unit 时间单位 
     * 支持 century, day, decade, dow, doy, epoch, hour, isodow, isoyear, 
     * microseconds, millennium, milliseconds, minute, month, quarter, 
     * second, timezone, timezone_hour, timezone_minute, week, year
     * @param {string} start 开始时间
     * @param {string} end 结束时间
     * @param date 上传日期，返回字段名称，默认：date
     * @param size 分组文件大小，返回字段名称，默认：size
     */
  async getGroupByDate(unit, start, end, date = 'date', size = 'size') {
    const { app } = this
    const sql = `SELECT date_part('${unit}', updated_at) AS ${date}, sum(size) AS ${size} 
        FROM image_store 
        where updated_at BETWEEN '${start}' and date'${end}'
        GROUP BY ${date} ORDER BY ${date} asc`
    return app.model.query(sql, { type: app.Sequelize.QueryTypes.SELECT })
  }
  /**
     * 按上传日期查询
     * @param date 上传日期
     */
  async getImageByUpdatedAt(date) {
    const { app } = this
    const sql = `SELECT "id", "foreign_key" AS "foreignKey", 
        "source_type" AS "sourceType", "filename", "size", "url", "path", 
        "creator", "created_at" AS "createdAt", "modifier", 
        "updated_at" AS "updatedAt" FROM "image_store" AS "imageStore" 
        where date(updated_at) = '${date}'`
    return app.model.query(sql, { type: app.Sequelize.QueryTypes.SELECT })
  }
}