
<style lang="scss" scoped>
.detail {
  .wrapper {
    padding: 30rpx;
  }
  .copy {
    margin-bottom: 30px;
    font-size: 28rpx;
  }
  .title {
    color: #333;
    font-size: 40rpx;
    font-weight: bold;
    padding-bottom: 15rpx;
  }
  .subtitle {
    font-size: 26rpx;
    color: #999;
    padding-bottom: 20rpx;
    border-bottom: 1rpx dashed #efefee;
  }
  .comment {
    padding-bottom: 50px;
    .comment-title {
      padding: 30px;
      font-size: 36px;
      color: #333;
      font-weight: bold;
    }
    .comment-hand {
      padding: 0 30px;
    }
    .line {
      margin: 30px 0;
      width: 100%;
      height: 1px;
      background: #dfdfdf;
    }
  }
}
</style>
<template>
  <div class="detail" v-if="detail && detail.title">
    <div class="wrapper">
      <div class="copy">markdown语法渲染有些问题，具体可以浏览https://www.zhooson.cn</div>
      <div class="title">{{detail.title}}</div>
      <div class="subtitle">浏览量：{{detail.browser}}</div>
      <div class="content">
        <wemark :mdData='detail.content' />
      </div>
    </div>

    <div class="comment">
      <div class="comment-title">
        发表评论
      </div>
      <div class="comment-hand">
        <write :aid="aid" :isShow="true"></write>
      </div>
      <div class="line"></div>
      <commentlist :aid="aid"></commentlist>
    </div>

  </div>
</template>
<script>
import { showToast } from "@/assets/scripts/feedback";
import { formatDate } from "../../utils";
import { getArticleDetail, getArticleCommentList } from "@/assets/api";
import wemark from "mpvue-wemark";
import "@/assets/styles/wemark.scss";
import commentlist from "@/components/write/commentlist";
import write from "@/components/write/write";

export default {
  name: "detail",
  data() {
    return {
      detail: {},
      list: [],
      userInfo: {},
      aid: 0,
    };
  },
  components: { wemark, write, commentlist },
  methods: {
    write(type, item, index, code = {}, codeindex = 0) {
      // 未登录
      if (!this.userInfo.username) {
        wx.navigateTo({
          url: "/pages/login/main",
        });
      } else {
        // console.log(123, index, item, code, codeindex);
        if (type === 2) {
          this.activeIndex = index + "-" + codeindex;
          this.cparams = {
            article_id: item.article_id,
            comment_id: item.id,
            from_id: this.userInfo.userId,
            to_id: code.from_user.id,
            nickname: code.from_user.nickname,
          };
        } else {
          this.activeIndex = index;
          // 回复
          this.cparams = {
            article_id: item.article_id,
            comment_id: item.id,
            from_id: this.userInfo.userId,
            to_id: item.user.id,
            nickname: item.user.nickname,
          };
        }
        this.show = true;
      }
    },

    async getDetail(id) {
      wx.showLoading({ title: "加载中..." });
      const res = await getArticleDetail(id);
      this.detail = res.data;
      wx.hideLoading();
    },
    async getList(article_id) {
      let params = {
        article_id,
      };
      let { data } = await getArticleCommentList(params);

      data.list.forEach((code) => {
        code.create_timeStr = formatDate(code.create_time);
      });

      this.list = data.list;
    },
  },
  mounted() {
    const info = wx.getStorageSync("userInfo");
    this.userInfo = info && JSON.parse(info);
  },
  async onShow() {},
  onLoad({ id }) {
    Object.assign(this.$data, this.$options.data());
    this.aid = id;
    this.getDetail(id);
    // this.getList(id);
  },
};
</script>
