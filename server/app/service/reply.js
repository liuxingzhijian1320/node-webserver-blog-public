const Service = require('egg').Service;

class ReplyService extends Service {
  async add(params) {
    return await this.app.mysql.insert('reply', params);
  }

  async del(id) {
    return await this.app.mysql.delete('reply', { id });
  }

  async queryByCommentId(comment_id) {
    let sql = `select id from reply where comment_id = ${comment_id}`;
    return await this.app.mysql.query(sql);
  }

  async delByCommentId(comment_id) {
    const sql = `delete from reply where comment_id = ${comment_id}`;
    return await this.app.mysql.query(sql);
  }

  async update(params) {
    return await this.app.mysql.update('reply', params);
  }

  async query(id) {
    let sql = `select * from reply where id = ${id}`;
    const detail = await this.app.mysql.query(sql);

    let userDetail = {};
    if (detail.length == 0) {
      return null;
    } else {
      let userSql = `select id, nickname from user where id = ${detail[0].from_id}`;
      userDetail = await this.app.mysql.query(userSql);
    }

    return {
      ...detail[0],
      userinfo: userDetail,
    };
  }

  async queryList({ pageIndex = 1, pageSize = 12, title = '' }) {
    const table_name = 'reply';
    const limit = `${(pageIndex - 1) * pageSize},${pageSize}`;
    let str = '';
    if (title) {
      str += ` and title like '%${title}%'`;
    }
    const query_str = '*';
    let sql = `select ${query_str} from ${table_name} where 1=1 ${str} order by create_time desc limit ${limit}`;
    let totalsql = `select count(*) from ${table_name}`;

    const list = await this.app.mysql.query(sql);
    const total = await this.app.mysql.query(totalsql);

    return { list, total: total[0]['count(*)'], pageSize, pageIndex };
  }
}

module.exports = ReplyService;
