<template>
  <div class="index-wrapper">
    <div class="inner-bg"></div>
    <div class="content">
      <sidertips></sidertips>
      <div class="bg dc">
        <slogen></slogen>
      </div>
      <div class="blog">
        <div class="section-title">Hello 10个肉包子</div>
        <div class="section-subtitle">博客使用如下技术/工具构建</div>
        <xmind></xmind>
      </div>
      <div class="find dc">
        <div>
          <div class="section-title">你可以在这些场所找到我</div>
          <ul class="contact-items">
            <li class="contact-item pointer">
              <a href="https://github.com/liuxingzhijian1320" target="_blank"
                class="href dc">
                <span class="iconfont icon-github my-svg-icon"></span>
              </a>
            </li>
            <li class="contact-item dc pointer">
              <a href="https://blog.csdn.net/Zhooson" target="_blank"
                class="href dc">
                <span class="iconfont icon-csdn my-svg-icon"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="interest-content">
        <interest></interest>
      </div>
    </div>

  </div>
</template>

<script>
import slogen from "src/components/slogen/slogen";
import xmind from "src/components/xmind/xmind";
import interest from "src/components/interest/interest";
import sidertips from "src/components/sidertips/sidertips";

export default {
  name: "index",
  components: {
    slogen,
    xmind,
    interest,
    sidertips,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/common.scss";
.index-wrapper {
  padding-top: 64px;
}
.inner-bg {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: url("./images/inner.jpg");
  background-size: cover;
  background-position: center;
}
.content {
  position: relative;
  z-index: 10;
  min-height: 100vh;
}
.bg {
  width: 100%;
  height: 350px;
  background: url("./images/bg.jpg");
  background-position: center center;
  background-size: cover;
}
.blog {
  padding: 100px;
  background: #fff;
  text-align: center;
}
.section-title {
  color: $color-title;
  font-weight: 500;
  font-size: 32px;
  line-height: 1;
}
.section-subtitle {
  margin: 20px 0 0;
  margin-bottom: 50px;
  color: $color-text;
  font-size: 24px;
}
.find {
  width: 100%;
  height: 362px;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  .section-title {
    color: #fff;
    font-size: 32px;
  }
}
.contact-items {
  margin-top: 60px;
  text-align: center;

  .contact-item {
    display: inline-block;
    transition: all 0.3s linear;
    &:hover {
      transform: scale(1.1);
    }
    .href {
      margin: 0 30px;
      width: 70px;
      height: 70px;
      border: 1px solid hsla(0, 0%, 100%, 0.75);
      border-radius: 50%;
      color: #fff;
      text-decoration: none;
    }
    .my-svg-icon {
      overflow: hidden;
      border-radius: 50%;
      font-size: 60px;
      &:hover {
        background-image: $bg;
      }
    }
  }
}
.clock-content {
  height: 600px;
  background: #fff;
}
.interest-content {
  height: 600px;
  background: #fff;
  background-color: $color-bg;
}

@media screen and (max-width: 750px) {
  .index-wrapper {
    padding-top: 0px;
  }
  .blog {
    padding: 50px 15px;
    .section-title {
      font-size: 28px;
    }
    .section-subtitle {
      margin: 10px 0 0;
      margin-bottom: 30px;
      font-size: 20px;
    }
  }

  .find {
    .section-title {
      font-size: 28px;
    }
  }
  .interest-content {
    display: none;
  }
}
</style>
