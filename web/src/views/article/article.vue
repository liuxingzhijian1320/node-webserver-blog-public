<template>
  <div class="article">
    <div class="content layout">
      <div class="blog" v-if="list">
        <blog v-for="(item,index) in list" :key="index" :item="item"></blog>

        <div class="pagenation">
          <div class="prev pointer" @click="prevPage" v-if="pageIndex > 1">上一页
          </div>
          <div class="next pointer" @click="nextPage"
            v-if="total > pageIndex * pageSize">下一页</div>
        </div>
      </div>
      <div class="category">
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
    blog,
  },
  data() {
    return {
      total: 0,
      pageIndex: 1,
      pageSize: 12,
      list: [],
      hotlist: [],
      articleId: "",
    };
  },
  watch: {
    $route(to, from) {
      // if (to.name == from.name) {
      //   if (!this.$route.query.cate) {
      //     this.articleId = "";
      //   }
      //   this.getList();
      // }
    },
  },
  methods: {
    nextPage() {
      this.pageIndex++;
      const params = {
        pageIndex: this.pageIndex,
      };
      console.log(13, params);
      this.getList(params);
    },

    prevPage() {
      this.pageIndex--;
      const params = {
        pageIndex: this.pageIndex,
      };
      console.log(13, params);
      this.getList(params);
    },

    async getHotList() {
      const { data } = await Api.getHotArticleList();
      this.hotlist = data;
    },

    //  文章列表
    async getList(params = {}) {
      let opt = {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        ...params,
      };
      const {
        data: { list, total },
      } = await Api.getArticleList(opt);
      this.list = list;
      this.total = total;
    },
  },
  mounted() {
    this.getList();
    this.getHotList();
    //
    // this.getCategory();
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/common.scss";

.article {
  min-height: 100vh;
  background-color: $color-bg;
  padding-top: 64px;
}
.content {
  display: flex;
  padding-top: 20px;
  padding-bottom: 50px;
}
.blog {
  flex: 1;
  margin-right: 20px;
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

.pagenation {
  width: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  font-size: 16px;
  color: #999;
  display: flex;
  padding-top: 30px;
  text-align: center;
}

@media screen and (max-width: 750px) {
  .article {
    padding-top: 0px;
  }
  .content {
    padding-bottom: 30px;
    padding-top: 10px;
  }
  .blog {
    margin: 0 10px;
  }
  .category {
    display: none;
  }
}
</style>
