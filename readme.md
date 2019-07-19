全栈开发是前端趋势
- client react mvvm   antd开发框架
- service  egg.js API调用
antd+ egg.js 阿里开源的全栈解决方案

## egg.js
MVC 模式: 
  router request => controller函数（类）  await 数据  
  UI tpl 在view/*tpl  html render   
  viewEngine tpl
  - 渲染使用nunjucks模板引擎
  - yarn add egg-view-nunjucks

router:
`router.get('/', controller.home.index )`

```js
const Controller  = require('egg').Controller;

class  HomeController extends Controller{
  async idnex(){
    this.ctx.body = 'hello, egg';
  }
}

module.exports = HomeController
```
webpack.config.js:
```js
devServer:{
   proxy: {
      "/api": {
        target: "http://127.0.0.1:7001",
        changeOrigin: true
      }
    }
}
```
跨域代理 将7000端口的请求代理到目标7001上