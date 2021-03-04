/* indent size: 2 */
/*图片信息*/
const moment = require('moment')
module.exports = app => {

  const { STRING, INTEGER, TIME } = app.Sequelize.DataTypes

  const Model = app.model.define('todoNode', {
    id: {
      type: STRING(20),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: STRING(100),
      allowNull: true,
      field: 'name',
    },
    title: {
      type: STRING(50),
      allowNull: false,
    },
    alias: {
      type: STRING(10),
      allowNull: true,
    },
    sort: {
      type: INTEGER,
      allowNull: false,
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
    tableName: 'todo_node'
  })

  Model.byPk = async function (pk) {
    return await this.findByPk(pk)
  }

  Model.associate = function () {
  }

  return Model
}
