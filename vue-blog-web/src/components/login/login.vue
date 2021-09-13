<template>
  <div class="login dc" @touchmove.prevent>
    <div class="content">
      <h3 class="title lg">注册</h3>
      <div class="close dc" @click="close">
        <svg t="1564543470405" class="icon" viewBox="0 0 1024 1024"
          version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3223"
          width="20" height="20">
          <path
            d="M995.104 74.048l-440.064 440.256 427.872 430.848c16.352 16.448 19.744 39.712 7.616 51.968s-35.232 8.8-51.584-7.648l-428.032-430.976-436.48 436.672c-16.544 16.544-39.936 19.968-52.224 7.68s-8.864-35.68 7.68-52.224l436.64-436.8-437.216-440.256c-16.352-16.448-19.744-39.712-7.616-51.968s35.264-8.832 51.584 7.648l437.376 440.384 439.904-440.096c16.544-16.544 39.936-19.968 52.224-7.68s8.864 35.68-7.68 52.224z"
            p-id="3224" data-spm-anchor-id="a313x.7781069.0.i0" class="selected"
            fill="#bfbfbf"></path>
        </svg>
      </div>

      <div class="input-div">
        <input type="text" class="input" v-model.trim='formData.username'
          placeholder="起个牛逼点的昵称吧~">
      </div>
      <div class="input-div">
        <input type="text" class="input" v-model.trim='formData.email'
          placeholder="电子邮箱">
      </div>
      <div class="input-div">
        <input type="text" class="input" v-model.trim='formData.url'
          placeholder="博客／Github地址">
      </div>
      <div class="input-div">
        <input type="text" class="input" v-model.trim='formData.avatar'
          placeholder="复制你的头像地址~">
        <a target="_blank"
          href="http://10221729.ch1.ctc.data.bego.cc/down/82fc8e9be6076f36b8d2c2a4d7757423/pic.html?cts=dir-2bf3b4a8734a62de13432891b1ee2765&ctp=114A88A173A64&ctt=1566878036&limit=2&spd=2800000&ctk=82fc8e9be6076f36b8d2c2a4d7757423&chk=cfe55cfbec43bb71dc3a9a0fe4c57a8e-8261"
          class="tips pointer">没有头像，点击此处</a>
      </div>
      <button class="submit dc" :class="disabled"
        @click="register(formData)">注册</button>

      <div class="login-ways">
        <div class="ways">其他登录方式</div>
        <div class="href-list">
          <div class="href" @click="goGithubAuth">
            <img class="pointer" src="./images/github.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { OAUTH_URL } from "src/assets/scripts/github";
export default {
  data() {
    return {
      formData: {
        username: "",
        email: "",
        url: ""
      }
    };
  },

  computed: {
    ...mapGetters({
      isNeedLogin: "login/isNeedLogin"
    }),
    disabled() {
      const { username, email } = this.formData;
      if (username && email) {
        return "";
      } else {
        return "disbaled";
      }
    }
  },
  methods: {
    goGithubAuth() {
      window.location.href = OAUTH_URL;
      localStorage.setItem(
        "GITHUB_LOGIN_REDIRECT_URL",
        `${this.$route.fullPath}`
      );
    },
    close() {
      this.$store.commit("login/setShow", false);
    },
    // 注册
    register() {
      this.$store.commit("login/registerUserinfo", this.formData);
      this.$store.commit("login/setHide", false);
      this.$store.commit("login/updateUserInfo");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/common.scss";

.login {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
}
.content {
  position: relative;
  padding: 20px 40px;
  width: 400px;
  border-radius: 6px;
  background: #fff;
  animation: rotate 0.3s ease-in;
}

@keyframes rotate {
  0% {
    transform: scale(0) rotate(1turn);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}

.title {
  margin-bottom: 20px;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
}
.tips {
  display: inline;
  color: #999;
  text-decoration: underline;
  font-size: 10px;
}
.close {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 50px;
}
.input-div {
  height: 60px;
  font-size: 16px;
  .input {
    padding: 0 20px;
    width: 100%;
    height: 50px;
    outline: none;
    border: 1px solid #999;
    border-radius: 3px;
    &:focus {
      outline: none;
      border: 1px transparent solid;
      background-image: $bg-border;
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
    }
  }
}
.submit {
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background-image: $bg;
  color: #fff;
  text-align: center;
  font-size: 16px;
  &.disbaled {
    opacity: 0.5;
    pointer-events: none;
  }
}
.login-ways {
  margin-top: 20px;
  .line {
    position: absolute;
    display: inline-block;
    content: "";
    height: 1px;
    background: #666;
    top: 50%;
    transform: translateY(-50%);
    width: 100px;
  }
  .ways {
    font-size: 14px;
    color: #666;
    text-align: center;
    position: relative;
    &:after {
      @extend .line;
      left: 0;
    }
    &:before {
      @extend .line;
      right: 0;
    }
  }
  .href-list {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .href {
      width: 32px;
      height: 32px;
      margin: 15px 0;
      img {
        display: block;
        cursor: pointer;
      }
    }
  }
}
</style>
