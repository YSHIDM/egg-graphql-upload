/* indent size: 2 */
/*图片信息*/
const moment = require('moment')
module.exports = app => {

  const { STRING, TIME, BOOLEAN, JSON } = app.Sequelize.DataTypes

  const Model = app.model.define('todo', {
    id: {
      type: STRING(20),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: STRING(50),
      allowNull: false,
    },
    content: {
      type: STRING(100),
      allowNull: true,
    },
    // TODONode 的名字: todo,inProgress,testing,done
    node: {
      type: STRING(10),
      allowNull: false,
    },
    // 是否归档
    isArchive: {
      type: BOOLEAN,
      allowNull: false,
      field: 'is_archive',
    },
    // 是否关闭,回收站
    isClose:{
      type: BOOLEAN,
      allowNull: false,
      field: 'is_close',
    },
    // 历史记录: [{ node, time: Date.now() }, ...]
    history:{
      type: JSON,
      allowNull: false
    },
    creator: {
      type: STRING(50),
      allowNull: true
    },
    createdAt: {
      type: TIME,
      allowNull: true,
      field: 'created_at',
      get() {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    modifier: {
      type: STRING(50),
      allowNull: true
    },
    updatedAt: {
      type: TIME,
      allowNull: true,
      field: 'updated_at',
      get() {
        return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }, {
    tableName: 'todo'
  })

  Model.byPk = async function (pk) {
    return await this.findByPk(pk)
  }

  Model.associate = function () {
  }

  return Model
}
