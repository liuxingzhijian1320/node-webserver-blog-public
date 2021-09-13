<style lang="scss" scoped>
.index {
  min-height: 100vh;
}
.fixed {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.inner-bg {
  z-index: 0;
}
.out-value {
  z-index: 1;
  overflow-y: scroll;
}
.sidertips {
  text-align: center;
  width: 100%;
  background: #f5f5f5;
  font-size: 28px;
  padding: 20px 0;
  color: #999;
}

.logo {
  width: 100%;
  height: 500px;
  // overflow: hidden;
  position: relative;
  .logo-bg {
    z-index: 2;
    height: 100%;
    width: 100%;
  }
  .posit {
    top: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .logo-out {
    z-index: 3;
    padding-top: 80px;
    text-align: center;
    color: #fff;
  }
  .logo-title {
    font-size: 70px;
    font-weight: bold;
    letter-spacing: 4px;
    margin-bottom: 20px;
  }
  .logo-subtitle {
    font-size: 50px;
  }
  .logo-btn-list {
    display: flex;
    justify-content: space-evenly;
    margin-top: 50px;
    .logo-btn {
      width: 240px;
      height: 72px;
      border-radius: 36px;
      color: #fff;
      font-size: 30px;
    }
    .github {
      background-image: linear-gradient(
        90deg,
        rgba(78, 187, 170, 0.75),
        rgba(107, 195, 13, 0.75)
      );
    }
    .article {
      border: 1px solid #fff;
    }
  }
}

.blog {
  padding: 100px 30px 50px 30px;
  background: #fff;
  text-align: center;
  overflow: hidden;
  .section-title {
    color: #060606;
    font-weight: 500;
    font-size: 50px;
    line-height: 1;
  }
  .section-subtitle {
    margin: 20px 0 0;
    margin-bottom: 50px;
    color: #414240;
    font-size: 30px;
  }
  .xmind {
    display: block;
    width: 2470px;
  }
}

.find {
  width: 100%;
  height: 724px;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  .section-title {
    color: #fff;
    font-size: 40px;
  }
  .contact-items {
    margin-top: 60px;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    .contact-item {
      border: 1px solid hsla(0, 0%, 100%, 0.75);
      width: 120px;
      height: 120px;
      margin: 0 30px;
      border-radius: 50%;
      color: #fff;
      .my-svg-icon {
        display: block;
        overflow: hidden;
        border-radius: 50%;
        font-size: 90px;
      }
    }
  }
}
</style>
<template>
  <div class="index">
    <image class="inner-bg fixed" :src="bg" />
    <div class="out-value fixed">
      <div class="sidertips">
        2021年4月12日 12:00:00 开源实验室 上线啦
      </div>

      <div class="logo dc">
        <image class="logo-bg posit" :src="logo" />
        <div class="logo-out posit">
          <div class="logo-title">少壮不努力</div>
          <div class="logo-subtitle">长大开夏利</div>

          <div class="logo-btn-list">
            <div class="logo-btn github dc" @click="copyGithub">Github</div>
            <div class="logo-btn dc article" @click="goArticle">进入博客</div>
          </div>
        </div>
      </div>

      <div class="blog">
        <div class="section-title">Hello 10个肉包子</div>
        <div class="section-subtitle">博客使用如下技术/工具构建</div>
        <scroll-view scroll-x="true" style="width: 690rpx;">
          <image class="xmind" :src="xmind" />
        </scroll-view>
      </div>

      <div class="find dc">
        <div>
          <div class="section-title">你可以在这些场所找到我</div>
          <ul class="contact-items">
            <li class="contact-item dc" @click="copyGithub">
              <i class="iconfont icon-github my-svg-icon"></i>
            </li>
            <li class="contact-item dc dc" @click="goCSDN">
              <i class="iconfont icon-csdn my-svg-icon"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { showToast } from "@/assets/scripts/feedback";
// import xmind from "@/components/xmind/xmind";

export default {
  name: "index",
  data() {
    return {
      bg: require("../../../static/images/inner.png"),
      logo: require("../../../static/images/logo.png"),
      xmind: require("../../../static/images/xmind.png"),
    };
  },
  components: {},
  methods: {
    copyGithub() {
      wx.setClipboardData({
        data: "https://github.com/liuxingzhijian1320",
        success: (res) => {
          showToast("复制成功");
        },
      });
    },
    goCSDN() {
      wx.setClipboardData({
        data: "https://blog.csdn.net/Zhooson",
        success: (res) => {
          showToast("复制成功");
        },
      });
    },
    goArticle() {
      wx.switchTab({
        url: "/pages/article/main",
      });
    },
  },
  async onLoad() {
    Object.assign(this.$data, this.$options.data());
  },
};
</script>
