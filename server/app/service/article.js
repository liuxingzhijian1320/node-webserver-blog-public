const Service = require('egg').Service;

class ArticleService extends Service {
  async add(params) {
    return await this.app.mysql.insert('article', params);
  }

  async del(id) {
    return await this.app.mysql.delete('article', { id });
  }

  async update(params) {
    return await this.app.mysql.update('article', params);
  }

  async query(id) {
    const detail = await this.app.mysql.get('article', { id });
    detail.taglist = [];
    const tags = (detail.tag && detail.tag.split(',')) || [];
    for (let id of tags) {
      // 关联tag信息
      detail.taglist.push(await this.app.mysql.get('cate', { id }));
    }
    return detail;
  }

  async queryTitle(name) {
    return await this.app.mysql.get('article', { name });
  }

  async queryHotList() {
    const sql = `select id, title, browser from article order by browser desc limit 3`;
    return await this.app.mysql.query(sql);
  }

  async queryList({ pageIndex = 1, pageSize = 12, title = '', is_del = 1 }) {
    const table_name = 'article';
    const limit = `${(pageIndex - 1) * pageSize},${pageSize}`;
    let str = '';
    if (title) {
      str += ` and title like '%${title}%'`;
    }

    if (is_del) {
      // 0 下架 1 上架
      str += ` and is_del = ${is_del}`;
    }

    const query_str = '*';
    let sql = `select ${query_str} from ${table_name} where 1=1 ${str} order by istop desc, create_time desc limit ${limit}`;
    let totalsql = `select count(*) from ${table_name} where 1=1 ${str}`;

    const list = await this.app.mysql.query(sql);
    const total = await this.app.mysql.query(totalsql);

    for (let val of list) {
      val.taglist = [];
      const tags = (val.tag && val.tag.split(',')) || [];
      for (let id of tags) {
        // 关联tag信息
        val.taglist.push(await this.app.mysql.get('cate', { id }));
      }
    }

    return { list, total: total[0]['count(*)'], pageSize, pageIndex };
  }
}

module.exports = ArticleService;
