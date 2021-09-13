<template>
  <div class="list">
    <div class="card">
      <div class="title">NGUI源码学习——UISprite</div>
      <div class="date">2017-06-17</div>
      <div class="tag">
        <div class="tag-list" v-for="(item,index) in new Array(2)" :key="index">
          VUE</div>
      </div>
      <div class="desc">Sublime Text 3编辑器的代码高亮（主题）效果不错，本文介绍如何使用ST3将其打印成PDF。Text
        3编辑器的代码高亮（主题）效果不错，本文
      </div>
    </div>
    <div class="card-action">阅读全文</div>
  </div>
</template>
<script>
export default {};
</script>

<style lang='scss' scoped>
.list {
  margin: 0 auto;
  margin-bottom: 30px;
  width: 700px;
  border-radius: 0 0 2px 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.title {
  margin-bottom: 10px;
  color: #3f51b5;
  font-weight: 700;
  font-size: 28px;
}
.card {
  padding: 25px 25px 30px;
}
.date {
  color: #4caf50;
  font-size: 14px;
}
.tag {
  display: flex;
  .tag-list {
    margin: 10px 3px;
    padding: 0 14px;
    height: 22px;
    border-radius: 16px;
    background: #66bb6a;
    color: #fff;
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
  }
}
.desc {
  left: 1.7;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
}
.card-action {
  padding: 20px 25px;
  border-top: 1px solid rgba(160, 160, 160, 0.2);
  color: #4caf50;
  font-size: 14px;
}
</style>
