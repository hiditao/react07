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
  config.keys = appInfo.name + '_1609919402898_7932';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 配置服务器基本信息
  config.cluster = {
    listen: {
      path: '',
      port: 8000,
      hostname: 'localhost',//默认localhost和ip地址,上线时用0.0.0.0
    }
  };

  // 配置安全验证
	config.security = {
		csrf: {
      			enable: false,
      			ignoreJSON: true,
   		}
  }
  
  // 配置文件模式
  config.multipart = {
    mode: 'file',
  };
  
  // 数据库配置
  config.mysql = {
    client: {
      host: "localhost",
      port: "3306",
      user: "root",
      password: "root",
      database: "mydb"
    }
  }


  // 跨域配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};



  return {
    ...config,
    ...userConfig,
  };
};
