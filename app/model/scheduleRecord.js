/*图片信息*/
const moment = require('moment')
module.exports = app => {

  const { DataTypes: { STRING, DATE, JSON, INTEGER } } = app.Sequelize

  const Model = app.model.define('scheduleRecord', {
    id: {
      type: STRING(25),
      allowNull: false,
      primaryKey: true,
      comment: '主键',
    },
    // 固定应用 id
    sourceId: {
      type: STRING(25),
      allowNull: true,
      field: 'source_id',
      comment: '定时器记录来源id',
    },
    // 定时器类型
    type: {
      type: STRING(50),
      allowNull: true,
      comment: '定时器类型',
    },
    // 提醒时间偏移时间，形如：[{"unit":"days","num":1,"state":1}]
    timeOffsets: {
      type: JSON,
      allowNull: true,
      field: 'time_offsets',
      comment: '提醒时间偏移时间，形如：[{"unit":"days","num":1,"state":1}]',
    },
    // 提醒时间，字符串数组，形如：['0','09','30','*','*','*']
    cron: {
      type: JSON,
      allowNull: true,
      comment: '提醒时间，字符串数组，形如：["0","9","30","*","*","*"]'
    },
    // 消息接收人
    receiver: {
      type: JSON,
      allowNull: true,
      comment: '消息接收人',
    },
    // 状态; 1:开启, 0: 关闭; 默认值为 1
    state: {
      type: INTEGER,
      allowNull: true,
      comment: '状态; 1:开启, 0: 关闭; 默认值为 1',
    },
    desc: {
      type: STRING(50),
      allowNull: true,
      comment: '定时器描述',
    },
    // 创建人
    creator: {
      type: STRING(50),
      allowNull: true,
      comment: '创建人',
    },
    // 创建时间
    createdAt: {
      type: DATE,
      allowNull: true,
      field: 'created_at',
      comment: '创建时间',
      get() {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss')
      },
    },
    // 修改人
    modifier: {
      type: STRING(50),
      allowNull: true,
      comment: '修改人',
    },
    // 修改时间
    updatedAt: {
      type: DATE,
      field: 'updated_at',
      allowNull: true,
      comment: '修改时间',
      get() {
        return this.getDataValue('modifier') ?
          moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss') : null
      },
    },
  }, {
    tableName: 'schedule_record',
  })

  return Model
}
