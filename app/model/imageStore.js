/* indent size: 2 */
/*图片信息*/
const moment = require('moment')
module.exports = app => {

  const DataTypes = app.Sequelize

  const Model = app.model.define('imageStore', {
    id: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    foreignKey: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field:'foreign_key'
    },
    sourceType: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field:'source_type'
    },
    filename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    space_size:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    creator: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: true,
      field:'created_at',
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
      field:'updated_at',
      get() {
        return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }, {
    tableName: 'image_store'

  })

  Model.byPk = async function(pk) {
    return await this.findByPk(pk)
  }

  Model.associate = function() {
  }

  return Model
}
