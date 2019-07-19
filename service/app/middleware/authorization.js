module.exports = (options, app) => {
  return async function (ctx, next) {
    if (app.config.authWhiteList.indexOf(ctx.url) !== -1) {
      await next(option)
      return
    }
    if (ctx.cookies.get('token')) {
      let token = ctx.cookies.get('token')
      try {
        ctx.jwt.verify(token, app.config.jwtSecret)
      } catch (e) {
        ctx.returnBody(401, "You don't have access right to get data")
        return
      }
      await next(option)
    }else{
      ctx.returnBody(401, "You don't have access right to get data")
      return
    }
  }
}