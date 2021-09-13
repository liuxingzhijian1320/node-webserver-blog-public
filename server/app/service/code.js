const Service = require('egg').Service;

class CodeService extends Service {
  async add(params) {
    return await this.app.mysql.insert('code', params);
  }

  async query(id) {
    return await this.app.mysql.get('code', { id });
  }
  async queryByCode(code) {
    return await this.app.mysql.get('code', { code });
  }

  async queryByUsername(username) {
    const sql = `select * from code where username = '${username}' order by create_time desc limit 1`;
    // return await this.app.mysql.get('code', { username });
    return await this.app.mysql.query(sql);
  }

  async queryList({ username = '', pageIndex = 1, pageSize = 12 }) {
    const limit = `${(pageIndex - 1) * pageSize},${pageSize}`;
    const sql = `select * from code where 1=1 and username like '%${username}%' order by create_time desc limit ${limit}`;
    let totalsql = `select count(*) from code where 1=1 and username like '%${username}%'`;
    const list = await this.app.mysql.query(sql);
    const total = await this.app.mysql.query(totalsql);
    return { list, total: total[0]['count(*)'], pageSize, pageIndex };
  }
}

module.exports = CodeService;
