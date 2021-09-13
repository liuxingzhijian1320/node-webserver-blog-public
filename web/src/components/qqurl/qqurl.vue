<template>
  <div class="rightBar">
    <div class="box dc" @click="goTop">
      <span class="iconfont icon-back unit-back"></span>
    </div>
  </div>
</template>
<script >
export default {
  data() {
    return {};
  },
  methods: {
    goTop() {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    },
  },
};
</script>
<style lang="scss">
.rightBar {
  position: fixed;
  right: 40px;
  bottom: 150px;
  z-index: 2000;
  display: inline-block;
  width: 50px;
  background-image: linear-gradient(90deg, #4ebbaa, #6bc30d);
  .box {
    width: 50px;
    height: 50px;
    text-align: center;
    cursor: pointer;
    .unit-back {
      color: #fff;
      font-size: 30px;
    }
  }
}

@media screen and (max-width: 750px) {
  .rightBar {
    display: none;
  }
}
</style>
