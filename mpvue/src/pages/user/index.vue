<style lang="scss" scoped>
.min-content {
  display: block;
}
.header {
  height: 400px;
  width: 100%;
  background-image: linear-gradient(
    45deg,
    rgba(#4ebbaa, 0.3),
    rgba(#6bc30d, 0.3)
  );
  text-align: center;
  padding-top: 40px;
  .avatar {
    width: 160px;
    height: 160px;
    text-align: center;
    display: inline-block;
  }
  .login {
    font-size: 32px;
    color: #999;
  }
  .info {
    margin-bottom: 20px;
    font-size: 32px;
    color: #333;
  }
}

.section {
  margin-top: 40px;
  .section-list {
    display: flex;
    padding: 30px 30px;
  }
  .section-key {
    width: 80px;
    .item-icon {
      color: #ccc;
      font-size: 68px;
    }
  }
  .section-val {
    flex: 1;
    color: #101010;
    font-size: 36px;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
}
</style>
<template>
  <div class="user">

    <div class="min-content">
      <header class="header">

        <img :src="avatar" @click="logout" alt="" class="avatar">
        <div v-if="userInfo && userInfo.nickname">
          <div class="info">{{userInfo.nickname}}</div>
          <div class="info">登录账号：{{userInfo.username}}</div>
        </div>
        <div class="login" v-else @click="login">请登录</div>

      </header>
      <div class="section">
        <div class="section-list px1" @click="open">
          <div class="section-key">
            <i class="iconfont icon-open item-icon"></i>
          </div>
          <div class="section-val">开源实验室</div>
        </div>
        <div class="section-list px1" @click="about">
          <div class="section-key">
            <i class="iconfont icon-about item-icon"></i>
          </div>
          <div class="section-val">关于本站</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { showToast, showComfirm } from "@/assets/scripts/feedback";

export default {
  name: "user",
  data() {
    return {
      avatar: require("../../../static/images/avatar.png"),
      userInfo: {},
    };
  },
  components: {},
  methods: {
    logout() {
      if (this.userInfo && this.userInfo.username) {
        showComfirm("确认退出吗？").then(() => {
          this.userInfo = {};
          wx.removeStorageSync("userInfo");
          wx.removeStorageSync("userInfo-token");
        });
      } else {
        this.login();
      }
    },
    login() {
      wx.navigateTo({
        url: "/pages/login/main?type=1",
      });
    },
    open() {
      wx.navigateTo({
        url: "/pages/open/main",
      });
    },
    about() {
      wx.navigateTo({
        url: "/pages/about/main",
      });
    },
  },
  async onLoad() {
    Object.assign(this.$data, this.$options.data());
  },
  onShow() {
    const info = wx.getStorageSync("userInfo");
    this.userInfo = info && JSON.parse(info);
  },

  mounted() {},
};
</script>
