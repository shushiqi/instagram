const Service = require('egg').Service
const uuid = require('uuid')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

class UserService extends Service {
  async register(user) {
    const { ctx, app } = this
    user.user_id = uuid.v4().replace(/-/g, '')
    // console.log('1111',user.usee_id)
    const queryResult = await this.hasRegister(user.email)
    console.log(queryResult)
    if (queryResult) {
      ctx.status = 200,
        ctx.body = {
          msg: '邮箱已被使用',
          flag: false
        }
      return
    }
    // 加密保存
    user.password = crypto.createHmac('sha256', app.config.password_secret).update(user.password).digest('hex')

    const userInfo = await this.ctx.model.User.create(user)
    ctx.status = 200,
      ctx.body = {
        msg: '注册成功',
        user: user.user_id,
        flag: true
      }
    return userInfo.dataValues
  }

  async hasRegister(email) {
    const user = await this.ctx.model.User.findOne({
      where: {
        email: email
      }
    })
    if (user && user.dataValues.user_id) {
      return true
    }
    return false
    // console.log('---', this.ctx.model.User)
  }

  async login(password, email) {
    const { app } = this
    const existUser = await this.getUserByMail(email)
    if (!existUser) {
      return null
    }
    const passhash = existUser.password
    const equal = passhash == crypto.createHmac('sha256', app.config.password_secret).update(password).digest('hex')
    if (!equal) {
      return false
    }
    const token = jwt.sign({ user_id: existUser.user_id }, app.config.jwtSecret, { expiresIn: '7d' })
    return token
  }

  async getUserByMail(email) {
    return this.ctx.model.User.findOne({
      where: {
        email
      }
    })
  }
}

module.exports = UserService