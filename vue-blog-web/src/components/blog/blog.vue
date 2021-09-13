<template>
  <router-link tag="section" :to="`/article/detail?id=${item.id}`"
    class="post-item pointer">
    <aside class="post-item-header">
      <div class="post-header-left">
        <div class="post-title">{{item.title}}</div>
        <div class="post-author">
          作者： alex.张 栏目：<span class="type">前端开发</span>
        </div>
      </div>
      <div class="post-header-right">
        <articledate :date="item.createdAt"></articledate>
      </div>
    </aside>
    <section class="post-article clearfix">
      <div class="post-thumb">
        <img :src="item.cover" alt="">
      </div>
      <div class="post-info">
        {{item.introduction}}
      </div>
    </section>
    <section class="post-category-items">
      <div class="post-category">

        <svg t="1562816213586" class="icon svg-icon" viewBox="0 0 1024 1024"
          version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6827"
          width="20" height="20">
          <path
            d="M166.831461 0h690.337078v1014.369798L512 722.20764 166.831461 1014.369798z"
            p-id="6828"></path>
        </svg>

        <span class="post-category-node" v-for="(code,index) in item.categories"
          :key='index'>{{code.name}}</span>
      </div>
      <div class="post-num">
        <div style="display:flex">
          <svg t="1562815744965" class="icon svg-icon" viewBox="0 0 1535 1024"
            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6031"
            width="23" height="23">
            <path
              d="M760.82745711 760.67828446c-131.37979553 0-238.10270562-109.68915205-238.10270562-244.7149529 0-134.96400445 106.72291008-244.65315652 238.10270561-244.6531558 131.37979553 0 238.16450202 109.68915205 238.16450203 244.71495293 0 134.96400445-106.78470649 244.71495292-238.16450202 244.7149529M205.21327972 514.23302422c0 27.31414394 9.7020828 54.13391374 27.80851736 74.15604629 353.53895094 390.98775398 752.68387033 390.86416116 1060.49325929-1.48312098a110.61610249 110.61610249 0 0 0 22.9265774-68.34715589v-3.39881899c0-25.83102295-8.58974169-51.2912653-24.96586893-70.88082085C954.06575405 38.64557993 554.36466485 41.6118219 229.19040108 444.64993368A111.23406944 111.23406944 0 0 0 205.21327972 514.23302422"
              p-id="6032"></path>
            <path
              d="M919.45959944 511.39037579c0 90.22319005-70.94261798 163.14330171-158.81753301 163.1433017-87.7513215 0-158.69393947-72.92011238-158.69393874-163.1433017 0-90.22319005 70.94261798-163.14330171 158.75573587-163.14330243s158.75573588 72.92011238 158.75573589 163.14330242"
              p-id="6033"></path>
          </svg>
          <span class="post-count">{{item.browser}}</span>
        </div>
        <div style="display:flex">
          <svg t="1562816199676" class="icon svg-icon" viewBox="0 0 1024 1024"
            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6423"
            width="20" height="20">
            <path
              d="M512 840.774c-28.037 0-55.36-2.54-81.943-6.93L238.021 950.365V756.382C137.888 686.075 73.634 578.277 73.634 457.204c0-211.847 196.262-383.57 438.365-383.57 242.102 0 438.366 171.723 438.366 383.57S754.101 840.774 512 840.774z m219.182-328.775c-30.26 0-54.796-24.504-54.796-54.795 0-30.255 24.535-54.796 54.796-54.796 30.259 0 54.795 24.54 54.795 54.796 0 30.29-24.535 54.795-54.795 54.795z m-219.183 0c-30.259 0-54.797-24.504-54.797-54.795 0-30.255 24.538-54.796 54.797-54.796s54.796 24.54 54.796 54.796c0 30.29-24.536 54.795-54.796 54.795z m-219.184 0c-30.258 0-54.796-24.504-54.796-54.795 0-30.255 24.538-54.796 54.796-54.796 30.26 0 54.796 24.54 54.796 54.796 0 30.29-24.535 54.795-54.796 54.795z"
              p-id="6424"></path>
          </svg>
          <span
            class="post-comment">{{parseInt(Math.random(0,1).toFixed(2)*100)}}</span>
        </div>
      </div>
    </section>
  </router-link>
</template>

<script>
import articledate from "../articledate/articledate";
export default {
  name: "blog",
  props: ["item"],
  components: {
    articledate
  }
};
</script>

<style lang='scss' scoped>
@import "../../assets/styles/common.scss";

.post-item {
  padding: 20px;
  border-bottom: 1px solid $color-line;
  .post-item-header {
    display: flex;
    border-bottom: 1px solid $color-bg;
  }
  .post-header-left {
    flex: 1;
  }
  .post-title {
    margin-bottom: 10px;
    color: #181817;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.1;
  }
  .post-author {
    margin-bottom: 10px;
    color: $color-hint;
    font-size: 13px;
    .type {
      color: #0366d6;
    }
  }
  .post-article {
    margin: 20px 0;
  }
  .post-thumb {
    float: left;
    margin-right: 10px;
    width: 300px;
    height: 180px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .post-info {
    text-align: justify;
    font-size: 15px;
    line-height: 28px;
  }
  .svg-icon {
    display: inline-block;
    margin-right: 8px;

    fill: #989898;
  }
  .post-category-items {
    display: flex;
    color: #989898;
    font-size: 13px;
  }
  .post-category {
    display: flex;
    flex: 1;
  }
  .post-category-node {
    margin-right: 5px;
  }
  .post-num {
    display: flex;
  }
  .post-count,
  .post-comment {
    display: inline-block;
    margin-right: 10px;
    line-height: 1.6;
  }
}
</style>
