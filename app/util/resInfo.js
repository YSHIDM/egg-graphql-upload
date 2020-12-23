// @ts-ignore
const STATUS_CODE = require('./statusCode')

module.exports = {
  getInfo: ({ code = 0, msg = '', data = null }) => {
    code = code || STATUS_CODE.errCode
    msg = msg || STATUS_CODE[code] || STATUS_CODE.errMsg
    return { code, msg, data }
  },
}
