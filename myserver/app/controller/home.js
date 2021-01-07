'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async login() {
    const {ctx} = this;

    console.log( ctx.request.body)

    let res = await ctx.service.home.login(ctx.request.body);

    ctx.body = res;

  }
}

module.exports = HomeController;
