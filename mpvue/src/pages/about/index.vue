<style lang="scss" scoped>
.about {
  min-height: 100vh;
  // background-color: $color-bg;
  // color: $color-text;
  padding: 30px;
}

.text {
  color: #333;
  font-size: 32px;
  margin-bottom: 30px;
  text-align: justify;
}

.href {
  color: #6bc30d;
  display: inline-block;
}

.it {
  font-size: 32px;
  .it-title {
    font-weight: bold;
  }
}

.ul {
  margin-top: 40px;
  .li {
    display: flex;
    margin-bottom: 20px;
    list-style: disc;
    line-height: 1.7;
  }
  .li-title {
    width: 200px;
  }
}

.ul2 {
  display: flex;
  .li2 {
    display: inline-block;
    margin: 0 6px 4px;
    padding: 4px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    background-color: #eee;
    color: #4fb4d7;
    line-height: 36px;
  }
}

.count {
  text-align: center;
  font-size: 50px;
  padding: 50px 0;
  .subtitle {
    margin-right: 60px;
    color: #4fb4d7;
  }
}

.decode {
  font-size: 30px;
  margin-bottom: 60px;
  .decode-item {
    line-height: 1.8;
    padding-left: 50px;
    box-sizing: border-box;
    width: 100%;
  }
}

.code {
  display: flex;
  flex-direction: column;
  .box {
    margin-bottom: 40px;
  }
  .t-title {
    text-align: center;
    font-weight: bold;
    margin-bottom: 30px;
    font-size: 36px;
  }
  .t-img {
    image {
      display: block;
      margin: 0 auto;
      width: 400px;
      height: 400px;
    }
  }
}
</style>
<template>
  <div class="about">

    <div class="count">
      <div class="subtitle lg">本站已经运行</div>
      <div class="lg">{{ countdown }}</div>
    </div>

    <div class="text">
      2019年：
      本人92年程序员一枚，鬼知道是什么星座。建站初衷就是前后端都想过一遍，正好通过本站技术把自己零零碎碎的node技术整合一起。
      本站的设计也是参考很多的网上设计最终的整合完成的，后期的有时间的准备把自己的博客网站前后端源码github公开的。本站博客前后断断续续持续了大半年，服务器到期等各种事情耽搁，本站的在建站中也遇到各种各样的问题，源码已上传至
      <span class="href"
        @click="copy('https://github.com/liuxingzhijian1320/node-webserver-blog-public')">github</span>，如果遇到问题欢迎一起交流
    </div>

    <div class="text">
      *** 由于项目中多次用到图片，故自己写了一套简易图床的项目，允许动态文件夹创建，搭建了属于自己一套图片项目。
    </div>

    <div class="text">
      2021年8月19
      正好阿里云ESC做活动，注册一个新的账号花了242元（新用户优惠原价252元，领取10元优惠券）购买一台
      <span class="href"
        @click="copy('https://www.aliyun.com/activity/daily/july?userCode=bsneu3xr')">2核2G5M的轻量级ESC</span>，每月1000G的流量限制（个人项目根本用不完），同时又购买了25元5000条短信服务(2年使用期)。本次blog的重构将原先的发送邮箱的验证码改为短信验证码，逼格蹭蹭的上涨。
    </div>

    <div class="text">
      2021年8月26：由于工作中使用egg比较多，故现在对整体blog的后端进行重构，使用egg来作为整体的框架，性能有明显的提升，对服务器做了负载均衡的配置。对文章的评论模块做了很大的改变，之前是一张表来存，评论和回复的数据，新的设计采用俩张表来实现，目前只允许做到2级评论，同时对敏感词也做了限制，防止瞎**搞事，
      同时也添加封“坏人”IP的功能，对账户体系做了扩展，有游客，管理员，root等多集权限，数据库库弃用Sequlize，采用原生的sql语句来实现复杂的业务逻辑。对于前端的博客操作，本次将会适配移动端(正在开发中)，暂时移除留言板块，
      新增登录注册退出功能。(代码后期整理开源出来)
    </div>

    <div class="it">本站的技术栈：主要包含 <span class="it-title">前端，后端，数据库，部署</span>四大方面
    </div>

    <ul class="ul">
      <li class="li">
        <div class="li-title">小程序</div>
        <ul class="ul2">
          <li class="li2">mpvue</li>
          <li class="li2">mpvue-wemark</li>
          <li class="li2">...</li>
        </ul>
      </li>
      <li class="li">
        <div class="li-title">前端/后台</div>
        <ul class="ul2">
          <li class="li2">vue</li>
          <li class="li2">mavon-editor</li>
          <li class="li2">highlight</li>
          <li class="li2">...</li>
        </ul>
      </li>
      <li class="li">
        <div class="li-title">后端</div>
        <ul class="ul2">
          <li class="li2">egg</li>
          <li class="li2">jwt</li>
          <li class="li2">cors</li>
          <li class="li2">...</li>
        </ul>
      </li>
      <li class="li">
        <div class="li-title">数据库</div>
        <ul class="ul2">
          <li class="li2">mysql</li>
          <li class="li2">navicate(工具)</li>
          <li class="li2">...</li>
        </ul>
      </li>
      <li class="li">
        <div class="li-title">部署</div>
        <ul class="ul2">
          <li class="li2">pm2</li>
          <li class="li2">nginx</li>
          <li class="li2">docker</li>
        </ul>
      </li>
    </ul>

    <div class="decode">
      <div>
        已完成计划:
        <div class="decode-item href"
          @click="copy('https://github.com/liuxingzhijian1320/node-webserver-blog-public')">
          源码已分享</div>
        <div class="decode-item href"
          @click="copy('https://blog.csdn.net/Zhooson/article/details/101067545')">
          docker运行前端项目</div>
        <div class="decode-item href"
          @click="copy('https://blog.csdn.net/Zhooson/article/details/107756222')">
          https证书[http和https都可以访问]</div>
        <div class="decode-item href"
          @click="copy('https://blog.csdn.net/Zhooson/article/details/85617665')">
          离线缓存[ServiceWorker]</div>
      </div>
    </div>

    <div class="code dc">
      <div class="box">
        <div class="t-title">技术交流添加微信</div>
        <div class="t-img">
          <img :src="code" alt="" />
        </div>
      </div>
      <div class="box">
        <div class="t-title">微信小程序</div>
        <div class="t-img">
          <img :src="person" alt="" />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { showToast } from "@/assets/scripts/feedback";

export default {
  name: "about",
  data() {
    return {
      countdown: "",
      code: require("../../../static/images/code.jpg"),
      person: require("../../../static/images/min.jpg"),
    };
  },
  components: {},
  methods: {
    copy(url) {
      wx.setClipboardData({
        data: url,
        success: (res) => {
          showToast("复制成功");
        },
      });
    },

    cacl() {
      var starttime = +new Date("2019-8-1 00:00:00");
      setInterval(() => {
        var nowtime = +new Date();
        var time = nowtime - starttime;
        var day = parseInt(time / 60 / 60 / 24 / 1000); //天
        var hour = parseInt((time / 1000 / 60 / 60) % 24); //小时
        var minute = parseInt((time / 1000 / 60) % 60); //分钟
        var seconds = parseInt((time / 1000) % 60); //秒
        // console.info("剩余", `${day}天${hour}时${minute}分${seconds}秒`);
        this.countdown = `${day}天${hour}时${minute}分${seconds}秒`;
      }, 1000);
    },
  },
  async onLoad() {
    Object.assign(this.$data, this.$options.data());
  },

  async onShow() {
    this.cacl();
  },
};
</script>
