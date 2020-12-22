/* indent size: 2 */
/*图片信息*/
const moment = require('moment')
module.exports = app => {

  const DataTypes = app.Sequelize

  const Model = app.model.define('todo', {
    id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    // TODONode 的名字: todo,inProgress,testing,done
    node: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    isArchive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    isRecycle:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    creator: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: true,
      field: 'created_at',
      get() {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    modifier: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.TIME,
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
