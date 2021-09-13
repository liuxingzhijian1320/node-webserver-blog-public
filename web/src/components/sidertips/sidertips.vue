<template>
  <div class="sidertips">
    <span class="text" v-for="(item,index) in tips"
      :class="activeFuc(item,index)">{{item}}</span>
  </div>
</template>

<script>
export default {
  name: "sidertips",
  data() {
    return {
      tips: [],
    };
  },
  methods: {
    activeFuc(item, index) {
      return `menu-animation-${index}`;
    },
  },
  created() {
    // let info =
    //   "应工信部要求，个人网站不得开放登录注册功能，留言及评价功能暂时无法使用，后期将优化其功能，如需交流问题前往《关于本站》模块建立联系。";
    let info = "2021年4月12日 12:00:00 开源实验室 上线啦";
    this.tips = info.split("");
    // console.info(234, this.tips.length);
  },
};
</script>

<style lang="scss" scoped>
.sidertips {
  text-align: center;
  width: 100%;
  background: #f5f5f5;
  font-size: 14px;
  padding: 10px 0;
  color: #999;
  .text {
    transition: all 0.1s linear;
    // transform: translateX(100px);
    animation-name: returnToNormal;
    animation-duration: 0.2s;
    animation-fill-mode: both;
  }
  @for $i from 0 through 66 {
    $time: ($i * 100) + ms;
    .menu-animation-#{$i} {
      animation-delay: $time;
    }
  }
  @keyframes returnToNormal {
    0% {
      opacity: 0;
      transform: translate3d(-30px, -100%, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(30px, 0, 0);
    }
  }
}
</style>
