'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async register() {
    const { ctx } = this;
    const { username, password, email } = ctx.request.body
    // ctx.body = `${username}, ${password}, ${email}`
    await ctx.service.user.register({ username, password, email })
  }
}

module.exports = LoginController;
