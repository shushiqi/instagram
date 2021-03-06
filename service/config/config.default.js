/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1563349135950_6589';

  // add your middleware config here
  config.middleware = [];
  config.security = { csrf: { enable: false } }
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456789',
    database: 'ins'
  }
  config.authWhiteList = ['/api/v2/user/login', '/api/v2/user/login/register']
  config.middleware = ['authorization']
  config.password_secret = 'ps1234secr'
  config.auth_cookie_name = 'token',
  config.jwtSecret = 'shushiqi'
  return {
    ...config
  };
};
