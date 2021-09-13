<template>
  <div class="lab-item">
    <div class="img-div dc">
      <img class="img" :src="item.url" alt="">
    </div>
    <div class="name t-of">{{item.name}}</div>
    <div class="remark" v-html='item.remark'></div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/common.scss";
.lab-item {
  margin-top: 30px;
  padding: 30px 0;
  width: 370px;
  background: #fff;
}
.img-div {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px;
  .img {
    display: block;
    height: 100%;
    &:hover:after {
      position: absolute;
      top: 0;
      left: -160%;
      z-index: 2;
      width: 100px;
      height: 100%;
      background-image: -webkit-gradient(
        linear,
        left top,
        right top,
        from(hsla(0, 0%, 100%, 0)),
        color-stop(50%, hsla(0, 0%, 100%, 0.3)),
        to(hsla(0, 0%, 100%, 0))
      );
      background-image: linear-gradient(
        90deg,
        hsla(0, 0%, 100%, 0),
        hsla(0, 0%, 100%, 0.3) 50%,
        hsla(0, 0%, 100%, 0)
      );
      content: "";
      -webkit-transform: skewX(-25deg) translateZ(0);
      transform: skewX(-25deg) translateZ(0);
    }
  }
}
.name {
  margin: 20px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.1;
}
.remark {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  margin: 0 20px;
  height: 96px;
  color: $color-hint;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 1.5rem;
  -webkit-line-clamp: 4;
}
</style>
