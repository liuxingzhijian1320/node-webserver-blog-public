<template>
  <div class="article">
    <div class="content layout">
      <div class="blog" v-if="list">
        <blog v-for="(item,index) in list" :key="index" :item="item"></blog>
      </div>
      <div class="category">
        <div class="aside-box">
          <h3 class="aside-title">个人分类</h3>
          <ul class="aside-content">

            <li class="aside-item pointer" @click="filterData(item)"
              v-for="item in newCates" :key="item.categoryId">
              <div class="aside-name">{{item.name}}</div>
              <div class="aside-count">{{item.articleId.length}}篇</div>
            </li>

          </ul>
        </div>
        <div class="aside-box">
          <h3 class="aside-title">热门文章</h3>
          <ul class="aside-content">
            <router-link :to="{path: `/article/detail?id=${item.id}`}" tag="li"
              class="aside-item-article pointer" v-for="item in hotlist"
              :key="item.id">
              <div class="aside-name">{{item.title}}</div>
              <div class="aside-count">阅读量： {{item.browser}}</div>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blog from "src/components/blog/blog";
import Api from "src/http/api";
export default {
  components: {
    blog
  },
  data() {
    return {
      list: [],
      hotlist: [],
      newCates: [],
      articleId: ""
    };
  },
  watch: {
    $route(to, from) {
      if (to.name == from.name) {
        if (!this.$route.query.cate) {
          this.articleId = "";
        }
        this.getList();
      }
    }
  },
  methods: {
    filterData(item) {
      this.articleId = [];
      this.$router.push({
        path: `/article?cate=${item.name}`
      });
      this.articleId = item.articleId.join(",");
    },
    async getList() {
      let params = {
        pageIndex: 1,
        pageSize: 20,
        is_del: 0,
        keyword: "",
        articleId: this.articleId
      };
      const {
        data: { count, data }
      } = await Api.getArticleList(params);

      this.list = data;
    },
    async getHotList() {
      let params = {};
      const {
        data: { data }
      } = await Api.getHotArticleList(params);

      this.hotlist = data;
    },

    async getHotCategory() {
      let params = {};
      return await Api.getHotCategory(params);
    },

    async getCategory() {
      let params = {};
      const { data } = await Api.getCategory(params);
      const { data: cates } = await this.getHotCategory();

      data.forEach(item => {
        cates.forEach(code => {
          if (item.id == code.categoryId) {
            code.name = item.name;
          }
        });
      });
      let newCates = [];
      for (let val of cates) {
        if (val.name && newCates[val.name]) {
          // 添加数据
          newCates[`${val.name}`].articleId.push(val.articleId);
          newCates[`${val.name}`].name = val.name;
          newCates[`${val.name}`].categoryId = val.categoryId;
        } else {
          // 不存在 创建
          newCates[`${val.name}`] = {};
          newCates[`${val.name}`].articleId = [];
          // 添加数据
          newCates[`${val.name}`].articleId.push(val.articleId);
          newCates[`${val.name}`].name = val.name;
          newCates[`${val.name}`].categoryId = val.categoryId;
        }
      }

      for (let key in newCates) {
        this.newCates.push(newCates[key]);
      }
    }
  },
  mounted() {
    this.getList();
    this.getHotList();

    this.getCategory();
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/common.scss";

.article {
  min-height: 100vh;
  background-color: $color-bg;
}
.content {
  display: flex;
  padding-top: 20px;
  padding-bottom: 50px;
  .blog {
    flex: 1;
    margin-right: 20px;
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  .category {
    width: 300px;
    height: 200px;
  }
  h3.aside-title {
    padding: 0 15px;
    height: 38px;
    border-bottom: 1px solid $color-bg;
    background: #fff;
    color: #3d3d3d;
    font-size: 16px;
    line-height: 38px;
  }
  .aside-content {
    padding: 15px 15px 20px 15px;
    background: #fff;
  }
  .aside-box {
    margin-bottom: 20px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
  .aside-item {
    display: flex;
    padding: 7px 0;
    color: #333;
    font-size: 14px;
    &:hover {
      color: #6bc30d;
    }
    .aside-name {
      flex: 1;
    }
  }
  .aside-item-article {
    padding: 7px 0;
    color: #333;
    font-size: 14px;
    &:hover {
      color: #6bc30d;
    }
    .aside-name {
      font-size: 12px;
      line-height: 1.4;
    }
    .aside-count {
      margin-top: 4px;
      color: $color-hint;
      font-size: 12px;
    }
  }
}
</style>
