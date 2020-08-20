'use strict'

const Controller = require('egg').Controller
const path = require('path');
const fs = require('fs');
class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const idxAddr = path.join(app.baseDir, 'app/public/dist/index.html');
    if (fs.existsSync(idxAddr)) {
      ctx.body = fs.readFileSync(idxAddr, 'utf-8');
      return;
    }
    await ctx.render('index', {
      title: '我是首页',
    })
  }
  async sio() {
    const { ctx } = this
    await ctx.render('sio', {
      title: '我是sio',
    })
  }
}

module.exports = HomeController
