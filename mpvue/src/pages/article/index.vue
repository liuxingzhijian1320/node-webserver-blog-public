<style lang="scss" scoped>
.content {
  padding: 30rpx;
  min-height: 100vh;
  background: #efefee;
  box-sizing: border-box;
  .website {
    padding: 20rpx 0;
    background: #fff;
    border-radius: 6rpx;
    margin-bottom: 20rpx;
    font-size: 28rpx;
    .copy {
      color: #4ebbaa;
      display: inline-block;
      margin-left: 20rpx;
    }
  }
  .list {
    width: 100%;
    .item {
      margin-bottom: 30rpx;
      background: #fff;
      padding: 30rpx;
      border-radius: 6rpx;
    }
    .item-info {
      display: flex;
      position: relative;
    }
    .item-top {
      position: absolute;
      // width: 100px;
      // height: 60px;
      background: #4ebbaa;
      padding: 1px 3px;
      top: -30px;
      right: -30px;
      font-size: 22px;
      color: #fff;
      text-align: right;
    }
    .item-left {
      flex: 1;
    }
    .title {
      font-size: 32rpx;
      font-weight: bold;
      color: #333;
      margin-bottom: 15rpx;
    }
    .subtitle {
      font-size: 26rpx;
      color: #999;
      padding-bottom: 20rpx;
      border-bottom: 1rpx dashed #efefee;
    }
    .desc {
      padding: 20rpx 0;
      font-size: 28rpx;
      color: #666;
    }
    .cover {
      width: 100%;
      height: 240rpx;
      border-radius: 4px;
    }
  }
}

.pagenation {
  width: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  font-size: 28px;
  color: #999;
  display: flex;
  padding-top: 10px;
  padding-bottom: 20px;
  text-align: center;
}
</style>
<template>
  <div class="content">
    <div class="website dc">个人博客地址：https://www.zhooson.cn <span class="copy"
        @click="copy">一键复制</span></div>
    <div class="list">
      <div class="item" v-for="(item, index) in list" :key="index"
        @click="goDetail(item)">
        <div class="item-info">
          <div class="item-left">
            <div class="title">{{item.title}}</div>
            <div class="subtitle">栏目：<text
                v-for="(code,codeindex) in item.taglist"
                :key='codeindex'>{{code.name}}，</text> 浏览量：{{item.browser}}
            </div>
          </div>
          <div class="item-right">
            <date :date="item.create_time"></date>
          </div>
          <div class="item-top" v-if="item.istop">置顶</div>
        </div>
        <div class="desc of1">
          {{item.introduction}}</div>
        <image :src="item.cover" mode="aspectFill" class="cover" />
      </div>
    </div>

    <div class="pagenation">
      <div class="prev pointer" @click="prevPage" v-if="pageIndex > 1">上一页
      </div>
      <div class="next pointer" @click="nextPage"
        v-if="total > pageIndex * pageSize">下一页</div>
    </div>

  </div>
</template>
<script>
import { showToast } from "@/assets/scripts/feedback";
import { getArticleList } from "@/assets/api";
import date from "@/components/date";
export default {
  name: "article",
  data() {
    return {
      title: "Hello",
      list: [],
      total: 0,
      pageIndex: 1,
      pageSize: 12,
    };
  },
  components: { date },
  computed: {},
  methods: {
    nextPage() {
      this.pageIndex++;
      const params = {
        pageIndex: this.pageIndex,
      };
      this.getList(params);
    },

    prevPage() {
      this.pageIndex--;
      const params = {
        pageIndex: this.pageIndex,
      };
      this.getList(params);
    },

    async getHotList() {
      const { data } = await Api.getHotArticleList();
      this.hotlist = data;
    },
    copy() {
      wx.setClipboardData({
        data: "https://www.zhooson.cn",
        success: function (res) {
          showToast("复制成功");
        },
      });
    },
    goDetail(item) {
      wx.navigateTo({
        url: `/pages/detail/main?id=${item.id}`,
      });
    },
    async getList() {
      const params = {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
      };
      wx.showLoading({ title: "加载中..." });
      const res = await getArticleList(params);
      this.list = res.data.list;
      this.total = res.data.total;
      wx.hideLoading();
    },
  },
  async onLoad() {
    Object.assign(this.$data, this.$options.data());
    this.getList();
  },
};
</script>
