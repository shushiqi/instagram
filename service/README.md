- egg.js  post提交 会有默认的安全防攻击机制
  CSRF 跨站请求伪造
  业务开发先取消 `  config.security = { csrf: { enable: false } }`

- sequelize 连接数据库报错
>(node:8256) [SEQUELIZE0004] DeprecationWarning: A boolean value was passed to options.operatorsAliases. This is a no-op with v5 and should be removed.
ERROR: Client does not support authentication protocol requested by server; consider upgrading MySQL client

原因：8.0mysql引入了caching_sha2_password模块作为默认身份验证插件，nodejs还没有跟进；

解决办法：进入mysql，输入 
  `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '自己的密码';`

>mysql 数据库表使用下划线命名法

- egg-router-plus
api版本命名空间

- password 加密
  存储用户密码时应进行加密
  登陆时，将用户输入的密码使用同样的加密方式进行加密后与存储的加密密码机型比较
  - crypto 通用的加密和哈希算法 Hmac sha256
  - JSON Web Token jwt 是一个非常轻巧的规范，允许我们在用户和服务器之间传递安全可靠的信息cookie

- 状态码 Status Code
  400 这个请求是非法的，导致服务器不接受该请求
  401 未经授权，被服务器配置拒绝