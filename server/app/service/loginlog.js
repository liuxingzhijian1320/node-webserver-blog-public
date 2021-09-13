const Service = require('egg').Service;

class LoginlogService extends Service {
  async add(params) {
    return await this.app.mysql.insert('loginlog', params);
  }

  async query(id) {
    return await this.app.mysql.get('loginlog', { id });
  }

  async queryList({ ip = '', pageIndex = 1, pageSize = 12 }) {
    let str = '';
    if (str) {
      str = `and ip like '%${ip}%'`;
    }
    const limit = `${(pageIndex - 1) * pageSize},${pageSize}`;
    const sql = `select * from loginlog where 1=1 ${str} order by create_time desc limit ${limit}`;
    let totalsql = `select count(*) from loginlog where 1=1 ${str} `;
    const list = await this.app.mysql.query(sql);

    for (let val of list) {
      val.userInfo = {};
      let userSql = `select id, nickname from user where id = ${val.userId}`;
      val.userInfo = (await this.app.mysql.query(userSql))[0];
    }

    const total = await this.app.mysql.query(totalsql);
    return { list, total: total[0]['count(*)'], pageSize, pageIndex };
  }
}

module.exports = LoginlogService;
