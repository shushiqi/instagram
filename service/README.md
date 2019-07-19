- egg.js  post提交 会有默认的安全防攻击机制
  CSRF 跨站请求伪造
  业务开发先取消 `  config.security = { csrf: { enable: false } }`

- sequelize 连接数据库报错
>(node:8256) [SEQUELIZE0004] DeprecationWarning: A boolean value was passed to options.operatorsAliases. This is a no-op with v5 and should be removed.
ERROR: Client does not support authentication protocol requested by server; consider upgrading MySQL client

原因：8.0mysql引入了caching_sha2_password模块作为默认身份验证插件，nodejs还没有跟进；

解决办法：进入mysql，输入 
  `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '自己的密码';`