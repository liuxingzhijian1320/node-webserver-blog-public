const Service = require('egg').Service;

class IPService extends Service {
  async add(params) {
    return await this.app.mysql.insert('ip', params);
  }

  async del(id) {
    return await this.app.mysql.delete('ip', { id });
  }

  async update({ id, ip, total, day, userId, client }) {
    return await this.app.mysql.update('ip', {
      id,
      ip,
      total,
      day,
      userId,
      client,
    });
  }

  async query(id) {
    return await this.app.mysql.get('ip', { id });
  }

  async queryIP(ip) {
    return await this.app.mysql.get('ip', { ip });
  }

  // 清空所有的ip 的数据 day = 0
  async setDayEmpty() {
    const sql = `UPDATE ip set day = 0`;
    return await this.app.mysql.query(sql);
  }

  async queryList({ ip = '', pageIndex = 1, pageSize = 12 }) {
    let str = '';
    if (str) {
      str = `and ip like '%${ip}%'`;
    }

    const limit = `${(pageIndex - 1) * pageSize},${pageSize}`;
    const sql = `select * from ip where 1=1 ${str} order by create_time desc limit ${limit}`;
    let totalsql = `select count(*) from ip where 1=1 ${str} `;
    const list = await this.app.mysql.query(sql);
    const total = await this.app.mysql.query(totalsql);
    return { list, total: total[0]['count(*)'], pageSize, pageIndex };
  }
}

module.exports = IPService;
