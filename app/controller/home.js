'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render('index', {
      title: '我是首页',
    });
  }
}

module.exports = HomeController;
