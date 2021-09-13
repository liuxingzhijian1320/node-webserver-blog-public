<template>
  <div class="message">
    <header class='header'></header>
    <div class="content">
      <div class="app-viewport dc">
        <div class="viewport">
          <h1 class="h1">Say Hello ~</h1>
          <msg></msg>
        </div>
      </div>
      <div class="app-timeline">
        <!-- <timeline></timeline> -->
        <timeline2 :list="list"></timeline2>
        <!-- <loading v-if="showloading"></loading> -->
      </div>
    </div>
  </div>

</template>

<script>
import msg from "src/components/msg/msg";
import loading from "src/components/loading/loading";

import Api from "src/http/api";

import timeline from "src/components/timeline/timeline";
import timeline2 from "src/components/timeline2/timeline2";
export default {
  name: "comment",
  data() {
    return {
      totalPages: null,
      pageIndex: 1,
      pageSize: 100,
      list: [],
      showloading: true
    };
  },
  components: {
    msg,
    timeline,
    timeline2,
    loading
  },
  mounted() {
    this.getList();

    // 注册scroll事件并监听
    window.addEventListener("scroll", () => {
      // console.info(
      //   "可视区域大小" +
      //     document.documentElement.clientHeight +
      //     "........" +
      //     window.innerHeight
      // );
      //console.info('滚动高度' + document.body.scrollTop) //原生的方法存在的兼容性问题 mac上面就计算出来是0
      var scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;

      // console.info("文档高度", scrollTop, document.body.offsetHeight);

      //判断是否滚动到底部
      if (scrollTop + window.innerHeight + 50 >= document.body.offsetHeight) {
        //0 表示距离底部多少的距离的开始触发loadmore效果
        this.getList((this.pageIndex += 1));
      }
    });
  },
  methods: {
    async getList(pageIndex = 1) {
      if (!this.showloading) return;
      this.showloading = false;

      if (pageIndex == 1) this.totalPages = 1;

      if (this.totalPages < pageIndex) {
        return false;
      }

      const { pageSize } = this;
      let params = {
        pageIndex,
        pageSize
      };
      const {
        data: { totalPages, data }
      } = await Api.getCommentList(params);
      this.totalPages = totalPages;
      this.showloading = true;
      this.list = [...this.list, ...data];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/common.scss";

.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 650px;
  background-image: url("./images/msg.jpeg");
  background-attachment: fixed;
  background-position: center;
  background-size: 100% 100%;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    content: "";
  }
}
.content {
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  .viewport {
    width: 820px;
  }
  .h1 {
    margin-bottom: 50px;
    color: #fff;
    text-align: center;
    font-weight: 500;
    font-size: 70px;
  }
  .app-viewport {
    height: 586px;
  }
}
.app-timeline {
  padding: 30px 0 50px 0;
  background-color: $color-bg;
}
</style>
