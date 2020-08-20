// import { ossUpload } from '../util/ossImage';
const { Controller } = require('egg')
// const path = require('path')
const fs = require('fs')
// const promises = fs.promises
// const sendToWormhole = require('stream-wormhole')

module.exports = class ConfigFile extends Controller {
  async download() {
    const { ctx } = this
    const map = { config: 'configFile.js' }
    const { fileSign } = ctx.request.body
    const fileStream = fs.createReadStream(__dirname + '/' + map[fileSign])

    // fileStream.pipe(ctx.res)
    ctx.body = fileStream
  }

}