const Service = require('egg').Service;

class UserService extends Service {
  async add(params) {
    return await this.app.mysql.insert('user', params);
  }

  async del(id) {
    return await this.app.mysql.delete('user', { id });
  }

  async update(params) {
    return await this.app.mysql.update('user', params);
  }

  async query(id) {
    const sql = `select id, username, email, status, nickname from user where id = ${id} limit 1`;
    return (await this.app.mysql.query(sql))[0];
  }

  async queryRoot(id) {
    const sql = `select id, root from user where id = ${id} limit 1`;
    return (await this.app.mysql.query(sql))[0];
  }

  async queryPass(id) {
    const sql = `select id, password from user where id = ${id} limit 1`;
    return (await this.app.mysql.query(sql))[0];
  }

  async queryAuth(id) {
    const sql = `select id, root from user where id = ${id} limit 1`;
    return (await this.app.mysql.query(sql))[0];
  }

  async queryByUsername(username) {
    return await this.app.mysql.get('user', { username });
  }
  async queryList({
    pageIndex = 1,
    pageSize = 12,
    email = '',
    username = '',
    nickname = '',
    status = '',
  }) {
    const table_name = 'user';
    const limit = `${(pageIndex - 1) * pageSize},${pageSize}`;
    let str = '';
    if (username) {
      str += ` and username like '%${username}%'`;
    }
    if (email) {
      str += ` and email like '%${email}%'`;
    }
    if (!(status === '')) {
      str += ` and status like '${status}'`;
    }
    if (nickname) {
      str += ` and nickname like '%${nickname}%'`;
    }

    const query_str = 'id,email,nickname,status,update_time,username';
    let sql = `select ${query_str} from ${table_name} where 1=1 ${str} order by create_time desc limit ${limit}`;
    let totalsql = `select count(*) from ${table_name} where 1=1 ${str}`;

    const list = await this.app.mysql.query(sql);
    const total = await this.app.mysql.query(totalsql);

    return { list, total: total[0]['count(*)'], pageSize, pageIndex };
  }
}

module.exports = UserService;
