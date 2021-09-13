<template>
  <router-link tag="section" :to="`/article/detail?id=${item.id}`"
    class="post-item pointer">
    <aside class="post-item-header">
      <div class="post-header-left">
        <div class="post-title">{{item.title}}</div>
        <div class="post-author">
          栏目：<span class="post-category-node"
            v-for="(code,index) in item.taglist"
            :key='index'>{{code.name}}</span>
          浏览量： <span class="post-count">{{item.browser}}</span>
        </div>
      </div>
      <div class="post-header-right">
        <articledate :date="item.create_time"></articledate>
      </div>
      <div class="post-header-top" v-if="item.istop">置顶</div>
    </aside>
    <section class="post-article clearfix">
      <div class="post-info min-post-info of1">
        {{item.introduction}}
      </div>
      <div class="post-thumb" :style="{backgroundImage:`url(${item.cover})`}">
      </div>
      <div class="post-info web-post-info">
        {{item.introduction}}
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
    articledate,
  },
};
</script>

<style lang='scss' scoped>
@import "../../assets/styles/common.scss";

.post-item {
  padding: 20px;
  // border-bottom: 1px solid $color-line;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  background: #fff;
  margin-bottom: 10px;
}
.post-item-header {
  display: flex;
  border-bottom: 1px dashed $color-bg;
  position: relative;
}
.post-header-top {
  position: absolute;
  // width: 100px;
  // height: 60px;
  background: #4ebbaa;
  padding: 1px 3px;
  top: -20px;
  right: -20px;
  font-size: 12px;
  color: #fff;
  text-align: right;
}
.post-header-left {
  flex: 1;
}
.post-title {
  margin-bottom: 10px;
  color: #181817;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.1;
}
.min-post-info {
  display: none;
}
.web-post-info {
  display: block;
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
  margin: 20px 0 0px 0;
}
.post-thumb {
  float: left;
  margin-right: 10px;
  width: 200px;
  height: 120px;
  border-radius: 4px;
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.post-info {
  text-align: justify;
  font-size: 15px;
  line-height: 28px;
  color: #666;
}

.post-category-node {
  margin-right: 5px;
}

.post-count {
  display: inline-block;
  margin-right: 10px;
  line-height: 1.6;
}

@media screen and (max-width: 750px) {
  .post-item {
    padding: 10px;
  }
  .post-title {
    color: #181817;
    font-size: 16px;
    line-height: 1.3;
    text-align: justify;
  }
  .post-article {
    margin-top: 10px;
  }
  .web-post-info {
    display: none;
  }
  .min-post-info {
    display: block;
    margin-bottom: 10px;
    width: 300px;
  }

  .post-header-right {
    padding-top: 15px;
  }

  .post-header-top {
    top: -10px;
    right: -10px;
    font-size: 12px;
  }

  .post-thumb {
    // height: 120px;
    width: 100%;
    img {
      display: block;
      width: 100%;
      // height: 100%;
      border-radius: 4px;
      overflow: hidden;
    }
  }
}
</style>
