<template>
  <div class="user">
    <div class="pc-text">请在移动端观看，谢谢</div>
    <div class="min-content">
      <header class="header">
        <img src="/static//avatar.png" @click="logout" alt="" class="avatar">
        <template v-if="userInfo && userInfo.nickname">
          <div class="info">{{userInfo.nickname}}</div>
          <div class="info">登录账号：{{userInfo.username}}</div>
        </template>
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
import { mapGetters } from "vuex";
export default {
  name: "user",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      userInfo: "login/userInfo",
      hasUserInfo: "login/hasUserInfo",
    }),
  },
  methods: {
    logout() {
      if (this.hasUserInfo) {
        this.$store.commit("login/setLogout", true);
      } else {
        this.login();
      }
    },
    login() {
      this.$router.push(`/login`);
      this.$store.commit("login/setLoginType", 1);
    },
    open() {
      this.$router.push(`/open`);
    },
    about() {
      this.$router.push(`/about`);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/common.scss";

.pc-text {
  display: block;
  text-align: center;
  color: #999;
  font-size: 22px;
  padding-top: 120px;
}
.min-content {
  display: none;
}

@media screen and (max-width: 750px) {
  .pc-text {
    display: none;
  }
  .min-content {
    display: block;
  }
  .header {
    height: 200px;
    width: 100%;
    background-image: linear-gradient(
      45deg,
      rgba(#4ebbaa, 0.3),
      rgba(#6bc30d, 0.3)
    );
    text-align: center;
    padding-top: 20px;
    .avatar {
      width: 80px;
      height: 80px;
      text-align: center;
      display: inline-block;
    }
    .login {
      font-size: 16px;
      color: #999;
    }
    .info {
      margin-bottom: 10px;
      font-size: 16px;
      color: #333;
    }
  }

  .section {
    margin-top: 20px;
    .section-list {
      display: flex;
      padding: 15px 15px;
    }
    .section-key {
      width: 40px;
      .item-icon {
        color: #ccc;
        font-size: 34px;
      }
    }
    .section-val {
      flex: 1;
      color: #101010;
      font-size: 18px;
      font-weight: 500;
      display: flex;
      align-items: center;
    }
  }
}
</style>
