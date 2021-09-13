// 定时 更新 ip 数据，每日定时clear ip表中 day 的数据

const Subscription = require('egg').Subscription;

class UpdateIP extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      // interval: '10s', // 每 10 秒执行一次
      cron: '59 59 23 * * ?', // 每天23:59:59
      type: 'worker', // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    await this.ctx.service.ip.setDayEmpty();
    console.log('cron is running');
  }
}

module.exports = UpdateIP;
