<template>
  <div class="footer">
    <div class="footer-inner">
      Copyright © 2010-2019
      <a href="http://www.zhooson.cn" class="pointer">www.zhooson.cn</a>
      版权所有
      <a href="http://www.beian.miit.gov.cn" target="_blank"
        class="pointer">皖ICP备18021126号</a>
      @ alex.张
      未经许可
      严禁复制
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  position: absolute;
  z-index: 100;
  width: 100%;
  height: 60px;
  background: #1f2d43;
  .footer-inner {
    margin: 0 auto;
    max-width: 1200px;
    height: 100%;
    color: #73777a;
    text-align: center;
    font-size: 18px;
    line-height: 60px;
  }
}
</style>
