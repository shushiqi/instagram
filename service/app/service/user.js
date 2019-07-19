const Service = require('egg').Service
const uuid = require('uuid')
class UserService extends Service {
  async register(user) {
    const { ctx } = this
    user.userId = uuid.v4().replace(/-/g, '')
    console.log('1111',user.userId)
    const queryResult = await this.hasRegister(user.email)
    console.log(queryResult)
  }

  async hasRegister(email) {
    const user = await this.ctx.model.User.findOne({
      where: {
        email: email
      }
    })
    if(user && user.dataValues.userId){
      return true
    }
    return false
    // console.log('---', this.ctx.model.User)
  }
}

module.exports = UserService