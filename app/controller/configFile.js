// import { ossUpload } from '../util/ossImage';
const { Controller } = require('egg')
const path = require('path')
const fs = require('fs')
const promises = fs.promises
const sendToWormhole = require('stream-wormhole')

module.exports = class ConfigFile extends Controller {
  async download() {
    const { ctx, app } = this;
    const map = { config: 'configFile.js' }
    console.log(ctx.request.body)
    const { fileSign } = ctx.request.body;
    console.log(fileSign)
    const fileStream = fs.createReadStream(__dirname + '/' + map[fileSign]);

    // fileStream.pipe(ctx.res)
    ctx.body = fileStream
  }

}