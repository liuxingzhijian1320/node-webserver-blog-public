const Service = require('egg').Service;

class CateService extends Service {
  async add(params) {
    return await this.app.mysql.insert('cate', params);
  }

  async del(id) {
    return await this.app.mysql.delete('cate', { id });
  }

  async update({ id, name }) {
    return await this.app.mysql.update('cate', { id, name });
  }

  async query(id) {
    return await this.app.mysql.get('cate', { id });
  }

  async queryName(name) {
    return await this.app.mysql.get('cate', { name });
  }

  async queryList({ name = '', pageIndex = 1, pageSize = 12 }) {
    const limit = `${(pageIndex - 1) * pageSize},${pageSize}`;
    const sql = `select * from cate where 1=1 and name like '%${name}%' order by create_time desc limit ${limit}`;
    let totalsql = `select count(*) from cate where 1=1 and name like '%${name}%'`;
    const list = await this.app.mysql.query(sql);
    const total = await this.app.mysql.query(totalsql);
    return { list, total: total[0]['count(*)'], pageSize, pageIndex };
  }
}

module.exports = CateService;
