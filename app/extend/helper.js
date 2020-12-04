const fileUtil = require('../util/fileUtil')
const CONSTANT = require('../util/constant')
const resInfo = require('../util/resInfo')
const helper = {
  parseMsg(action, payload = {}, metadata = {}) {
    const meta = Object.assign({}, {
      timestamp: Date.now(),
    }, metadata)

    return {
      meta,
      data: {
        action,
        payload,
      },
    }
  },
}
Object.assign(helper, { fileUtil })
Object.assign(helper, {CONSTANT})
Object.assign(helper, resInfo)
module.exports = helper
