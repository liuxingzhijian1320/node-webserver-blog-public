<template>
  <div class="about">
    <div class="content">
      <div class="wrapper">
        <div>
          2019年：
          本人92年程序员一枚，鬼知道是什么星座。建站初衷就是前后端都想过一遍，正好通过本站技术把自己零零碎碎的node技术整合一起。
          本站的设计也是参考很多的网上设计最终的整合完成的，后期的有时间的准备把自己的博客网站前后端源码github公开的。本站博客前后断断续续持续了大半年，服务器到期等各种事情耽搁，本站的在建站中也遇到各种各样的问题，源码已上传至<a
            class="href" target="_blank"
            href="https://github.com/liuxingzhijian1320/node-webserver-blog-public">github</a>，如果遇到问题欢迎一起交流
        </div>
        <br />
        <div>
          *** 由于项目中多次用到图片，故自己写了一套简易图床的项目，允许动态文件夹创建，搭建了属于自己一套图片项目。
        </div>
        <br />
        <div>
          2021年8月19
          正好阿里云ESC做活动，注册一个新的账号花了242元（新用户优惠原价252元，领取10元优惠券）购买一台<a
            href="https://www.aliyun.com/activity/daily/july?userCode=bsneu3xr"
            class="href" target="_blank"> 2核2G5M的轻量级ESC
          </a>，每月1000G的流量限制（个人项目根本用不完），同时又购买了25元5000条短信服务(2年使用期)。本次blog的重构将原先的发送邮箱的验证码改为短信验证码，逼格蹭蹭的上涨。
        </div>
        <br />
        <div>
          2021年8月26：由于工作中使用egg比较多，故现在对整体blog的后端进行重构，使用egg来作为整体的框架，性能有明显的提升，对服务器做了负载均衡的配置。对文章的评论模块做了很大的改变，之前是一张表来存，评论和回复的数据，新的设计采用俩张表来实现，目前只允许做到2级评论，同时对敏感词也做了限制，防止瞎**搞事，
          同时也添加封“坏人”IP的功能，对账户体系做了扩展，有游客，管理员，root等多集权限，数据库库弃用Sequlize，采用原生的sql语句来实现复杂的业务逻辑。对于前端的博客操作，本次将会适配移动端(正在开发中)，暂时移除留言板块，
          新增登录注册退出功能。(代码后期整理开源出来)
        </div>

        <div class="it">
          本站的技术栈：主要包含 <strong>前端</strong>， <strong>后端</strong>，
          <strong>数据库</strong>，
          <strong>部署</strong>
          四大方面
        </div>
        <ul class="ul">
          <li class="li">
            <div class="li-title">前端/后台</div>

            <ul class="ul2">
              <li class="li2">vue</li>
              <li class="li2">vuex</li>
              <li class="li2">vue-router</li>
              <li class="li2">mavon-editor</li>
              <li class="li2">highlight</li>
              <li class="li2">wowjs</li>
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
      </div>

      <div class="wrapper count">
        <div class="subtitle lg">本站已经运行</div>
        <div class="lg">{{ countdown }}</div>
      </div>

      <div class="wrapper">
        <div>
          已完成计划:
          <a class="href" target="_blank"
            href="https://github.com/liuxingzhijian1320/node-webserver-blog-public">👏源码已分享</a>
          <a class="href" target="_blank"
            href="https://blog.csdn.net/Zhooson/article/details/101067545">👏docker运行前端项目</a>
          <a class="href" target="_blank"
            href="https://blog.csdn.net/Zhooson/article/details/107756222">👏https证书[http和https都可以访问]</a>
          <a class="href" target="_blank"
            href="https://blog.csdn.net/Zhooson/article/details/85617665">👏离线缓存[ServiceWorker]</a>
        </div>
      </div>

      <div class="wrapper dc">
        <div class="box">
          <div class="t-title">技术交流添加微信</div>
          <div class="t-img">
            <img width="150" height="150" src="./images/1.jpeg" alt="" />
          </div>
        </div>
        <div class="box">
          <div class="t-title">微信小程序</div>
          <div class="t-img">
            <img width="150" height="150" src="./images/min.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  components: {},
  data() {
    return {
      countdown: "",
    };
  },
  methods: {
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
  mounted() {
    this.cacl();
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/common.scss";

.about {
  min-height: 100vh;
  background-color: $color-bg;
  color: $color-text;
  padding-top: 64px;
}

.content {
  padding-top: 20px;
  width: 100%;
  padding-bottom: 40px;
}
.wrapper {
  margin: 0 auto;
  margin-top: 30px;
  padding: 30px 50px;
  max-width: 960px;
  background: #fff;
  font-size: 18px;
}
.it {
  margin-top: 20px;
}
.ul {
  margin-top: 20px;
  .li {
    display: flex;
    margin-bottom: 10px;
    list-style: disc;
    line-height: 1.7;
  }
}
.li-title {
  width: 100px;
}
.ul2 {
  display: flex;
  .li2 {
    display: inline-block;
    margin: 0 3px 2px;
    padding: 2px 8px;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    background-color: #eee;
    color: #4fb4d7;
    line-height: 18px;
  }
}
.subtitle {
  margin-right: 30px;
}
.count {
  display: flex;
}
.t-title {
  text-align: center;
  font-weight: bold;
  margin-bottom: 15px;
}
.t-img {
  img {
    display: block;
    margin: 0 auto;
  }
}
.href {
  text-decoration: underline;
  color: #6bc30d;
  cursor: pointer;
}

.box {
  margin-right: 30px;
}
@media screen and (max-width: 750px) {
  .about {
    padding-top: 0px;
  }
  .content {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .wrapper {
    padding: 15px 15px 20px;
    .ul {
      .li {
        display: block;
      }
    }
  }
}
</style>
