// import { ossUpload } from '../util/ossImage';
const { Controller } = require('egg')
const path = require('path')
const fs = require('fs')
const cp = require('child_process')
const util = require('util')
const spawn = util.promisify(cp.spawn)
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
  async restart() {
    console.log('重启1')
    spawn('node', [path.join(this.ctx.app.baseDir, 'restart.js')], {
      detached: true,
      stdio: 'ignore'
    })
    this.ctx.body = 'ok'
  }
  async testRestart() {
    this.ctx.body = 'ok1'
  }
}