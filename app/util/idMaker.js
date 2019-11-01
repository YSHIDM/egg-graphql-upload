const SHORT_ID = require('shortid');
const { format } = require('util');
const moment = require('moment');

module.exports = {
    /**
     * 数据库主键生成器
     * @param prefix
     */
    genId: function (prefix = '') {
        return format('%s%s', prefix, SHORT_ID.generate());
    },
    /**
     * 当日累加主键
     * @param prefix
     */
    genIncrId: async function(prefix = '') {
        const lua = `
                local newCacheDay = ARGV[1]
                local newCacheCount = 0
                local v = redis.call('hget', KEYS[1], KEYS[2]);
                if type(v) ~= 'boolean' then
                    local vArr= {}
                    string.gsub(v, '[^-]+', function(w) table.insert(vArr, w) end )
                    if newCacheDay == vArr[1] then
                        newCacheCount = vArr[2]
                    end
                end
                newCacheCount = newCacheCount + 1
                redis.call('hset', KEYS[1], KEYS[2], newCacheDay..'-'..newCacheCount)
                return newCacheCount
                `;
        const today = moment().format('YYYYMMDD');
        const cacheK = format('%s_ID', prefix);
        const count = await this.redis.eval(lua, 2, 'GEN_INCR', cacheK, today);
        const formatS = count/10 < 1 ? '%s%s0%s' : '%s%s%s';
        return format(formatS, prefix, today, count);
    }
};
