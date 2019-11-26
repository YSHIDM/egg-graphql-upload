/* indent size: 2 */
/*角色信息*/
const moment = require('moment');
module.exports = app => {

    const DataTypes = app.Sequelize;

    const Model = app.model.define('jsonTest', {
        id: {
            type: DataTypes.STRING(20),
            allowNull: false,
            primaryKey: true
        },
        strArr: {
            type: DataTypes.JSON,
            allowNull: true,
            field: 'str_arr',
        },
        objArr: {
            type: DataTypes.JSON,
            allowNull: true,
            field: 'obj_arr',
        },
        objObj: {
            type: DataTypes.JSON,
            allowNull: true,
            field: 'obj_obj',
        },
        obj: {
            type: DataTypes.JSON,
            allowNull: true,
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
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
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
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }, {
        tableName: 'json_test'

    });

    Model.byPk = async function (pk) {
        return await this.findByPk(pk);
    };

    Model.associate = function () {
        // app.model.Flow.hasMany(app.model.FLowData, { foreignKey: 'flowId' });
    }

    return Model;
};
