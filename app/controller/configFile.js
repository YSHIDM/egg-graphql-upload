// import { ossUpload } from '../util/ossImage';
const { Controller } = require('egg')
const path = require('path')
const fs = require('fs')
const cp = require('child_process')
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
  async restart(){
    console.log('重启')
    try {
      cp.spawn('.',[path.join(this.ctx.app.baseDir,'u.sh')],{
        detached: true,
        stdio: 'ignore'
      })
      this.ctx.body = 'ok'
    } catch (error) {
      his.ctx.body = error
    }

  }
}