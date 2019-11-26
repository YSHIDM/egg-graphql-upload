const SHORT_ID = require('shortid');
const { format } = require('util');

module.exports = {
    /**
     * 数据库主键生成器
     * @param prefix
     */
    genId: function (prefix = '') {
        return format('%s%s', prefix, SHORT_ID.generate());
    }
};
