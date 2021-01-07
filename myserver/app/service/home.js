'use strict';

const Service = require('egg').Service;

class HomeService extends Service {

    async login(user) {
        let { username, passwd } = user;

        let sql = `select * from user where username='${username}'`;
        let res = await this.app.mysql.query(sql);
        console.log(res);
        let obj = {};
        if (!res[0]) {  //如果没有查询到数据，得到一个空数组，空数组在if中为true
            obj.code = 0;
            obj.msg = "用户不存在"
        } else { //用户名存在
            if (res[0].passwd == passwd) { //密码正确
                obj = {
                    code: 200,
                    msg: "登录成功"
                }
            } else {
                obj = {
                    code: -1,
                    msg: "密码错误"
                }
            }
        }

        return obj;
    }
}

module.exports = HomeService;
