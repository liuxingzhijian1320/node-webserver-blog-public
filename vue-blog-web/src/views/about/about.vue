<template>
  <div class="about">
    <div class="content">
      <div class="wrapper">
        本人92年程序员一枚，鬼知道是什么星座。建站初衷就是前后端都想过一遍，正好通过本站技术把自己零零碎碎的node技术整合一起。
        本站的设计也是参考很多的网上设计最终的整合完成的，后期的有时间的准备把自己的博客网站前后端源码github公开的。本站博客前后断断续续持续了大半年，服务器到期等各种事情耽搁，本站的在建站中也遇到各种各样的问题，后期会源码公开如果遇到问题欢迎一起交流
        <div class="it"> 本站的技术栈：主要包含
          <strong>前端</strong>，
          <strong>后端</strong>，
          <strong>数据库</strong>，
          <strong>部署</strong>
          等四大方面
        </div>
        <ul class="ul">
          <li class="li">
            <div class="li-title">前端</div>
            <ul class="ul2">
              <li class="li2">vue</li>
              <li class="li2">webpack</li>
              <li class="li2">vuex</li>
              <li class="li2">vue-router</li>
              <li class="li2">mavon-editor</li>
              <li class="li2">marked</li>
              <li class="li2">highlight</li>
              <li class="li2">wowjs</li>
            </ul>
          </li>
          <li class="li">
            <div class="li-title">后台系统</div>
            <ul class="ul2">
              <li class="li2">vue</li>
              <li class="li2">webpack</li>
              <li class="li2">vuex</li>
              <li class="li2">vue-router</li>
              <li class="li2">mavon-editor</li>
              <li class="li2">marked</li>
              <li class="li2">highlight</li>
              <li class="li2">wowjs</li>
            </ul>
          </li>
          <li class="li">
            <div class="li-title">后端</div>
            <ul class="ul2">
              <li class="li2">node</li>
              <li class="li2">jwt</li>
              <li class="li2">koa-body</li>
              <li class="li2">nodemon</li>
            </ul>
          </li>
          <li class="li">
            <div class="li-title">数据库</div>
            <ul class="ul2">
              <li class="li2">mysql</li>
              <li class="li2">sequelize</li>
            </ul>
          </li>
          <li class="li">
            <div class="li-title">部署</div>
            <ul class="ul2">
              <li class="li2">pm2</li>
              <li class="li2">nginx</li>
            </ul>
          </li>
        </ul>
      </div>

      <div class="wrapper count">
        <div class="subtitle lg">本站已经运行</div>
        <div class="lg">{{countdown}}</div>
      </div>

      <div class="wrapper">
        下一步计划： 使用nuxt的实现SSR的功能，弄个https证书，然后添加上PWA的功能
      </div>

      <div class="wrapper">
        <div class="t-title">技术交流添加微信</div>
        <div class="t-img">
          <img width="150" height="150" src="./images/1.jpeg" alt="">
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
      countdown: ""
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
    }
  },
  mounted() {
    this.cacl();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/common.scss";

.about {
  min-height: 100vh;
  background-color: $color-bg;
  color: $color-text;
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
</style>
