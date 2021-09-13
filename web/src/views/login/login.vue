
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
  padding: 50px 60px 50px 60px;
  width: 500px;
  border-radius: 6px;
  background: #fff;
  animation: rotate 0.3s ease-in;
  .login-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #999;
    font-size: 16px;
  }
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
  display: flex;
  margin-bottom: 10px;
  .input {
    flex: 1;
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
  .code {
    margin-left: 10px;
    border-radius: 3px;
    height: 50px;
    width: 100px;
    font-size: 16px;
    color: #999;
    border: 1px solid #999;
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

@media screen and (max-width: 750px) {
  .content {
    width: 95%;
    padding: 30px;
  }
}
</style>

<template>
  <div class="login dc" @touchmove.prevent>

    <!-- 注册 -->
    <div class="content" v-if="loginType == 2">
      <div class="login-btn pointer" @click="optBtn(1)">登录</div>
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
        <input type="text" class="input" v-model.trim="formData.nickname"
          placeholder="起个牛逼点的昵称吧~" />
      </div>
      <div class="input-div">
        <input type="number" class="input" v-model.trim="formData.username"
          placeholder="手机号（登录账号）" />
        <div class="code dc pointer" @click="getCode">
          {{show ? count + 's' : '获取验证码'}}
        </div>
      </div>
      <div class="input-div">
        <input type="number" class="input" v-model.trim="formData.code"
          placeholder="验证码" />
      </div>
      <div class="input-div">
        <input type="password" class="input" v-model.trim="formData.password"
          placeholder="登录密码" />
      </div>
      <div class="input-div">
        <input type="password" class="input" v-model.trim="formData.repassword"
          placeholder="确认登录密码" />
      </div>
      <button class="submit dc" @click="register">
        注册
      </button>
    </div>

    <!-- 登录 -->
    <div class="content" v-if="loginType == 1">
      <div class="login-btn pointer" @click="optBtn(2)">注册</div>
      <h3 class="title lg">登录</h3>
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
        <input type="text" class="input" v-model.trim="formData.username"
          placeholder="登录账号" />
      </div>
      <div class="input-div">
        <input type="password" class="input" v-model.trim="formData.password"
          placeholder="登录密码" />
      </div>
      <button class="submit dc" @click="login">
        登录
      </button>
    </div>

    <!-- <div class="login-ways">
        <div class="ways">其他登录方式</div>
        <div class="href-list">
          <div class="href" @click="goGithubAuth">
            <img class="pointer" src="./images/github.png" alt="" />
          </div>
        </div>
      </div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import md5 from "js-md5";

// import { OAUTH_URL } from "../../assets/scripts/github";
import Utils from "src/assets/scripts/utils";
import Api from "src/http/api";
const TIME_COUNT = 60;

export default {
  data() {
    return {
      formData: {
        nickname: "",
        username: "",
        code: "",
        password: "",
        repassword: "",
        id: 0,
      },

      count: 0,
      show: false,
      timer: null,
    };
  },

  mounted() {},

  computed: {
    ...mapGetters({
      loginType: "login/loginType", // 1  login   2 register
    }),
  },
  methods: {
    async login() {
      const { username, password } = this.formData;
      if (!username || username.length != 11) {
        Utils.Toast("请填写手机号哦😊😊～", 2000);
        return;
      } else if (!password) {
        Utils.Toast("请填写密码哦😊😊～", 2000);
        return;
      }

      const res = await Api.loginWebsite({ username, password: md5(password) });
      Utils.Toast(res.message, 2000);
      if (res.code === 200) {
        this.$store.commit("login/registerUserinfo", res.data);
        this.$store.commit("login/getUserInfo");
        this.$router.back();
      }
    },
    async getCode() {
      const { username } = this.formData;
      if (!username || username.length != 11) {
        Utils.Toast("请填写正确的手机号哦😊😊～", 2000);
        return;
      }

      if (!this.timer) {
        // 发送验证码接口
        await Api.loginGetCode({ username }).then((res) => {
          Utils.Toast(res.message, 2000);
          if (res.code === 200) {
            this.formData.id = res.data.id;
            this.count = TIME_COUNT;
            this.show = true;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
              } else {
                this.show = false;
                clearInterval(this.timer);
                this.timer = null;
              }
            }, 1000);
          }
        });
      }
    },
    optBtn(opt) {
      this.$store.commit("login/setLoginType", opt);
    },
    close() {
      // this.$store.commit("login/setShow", false);
      this.$router.back();
    },
    // 注册
    async register() {
      const { username, nickname, code, password, repassword } = this.formData;
      if (!nickname) {
        Utils.Toast("请填写帅气的昵称哦😊😊～", 2000);
        return;
      } else if (!username) {
        Utils.Toast("请填写手机号哦😊😊～", 2000);
        return;
      } else if (!code || code.length != 6) {
        Utils.Toast("请填写正确的验证码哦😊😊～", 2000);
        return;
      } else if (!password || !repassword) {
        Utils.Toast("请填写密码哦😊😊～", 2000);
        return;
      } else if (password != repassword) {
        Utils.Toast("两次密码不一致😊😊～", 2000);
        return;
      }

      // 注册接口
      const res = await Api.registerWebsite({
        ...this.formData,
        password: md5(password),
        repassword: md5(repassword),
      });
      Utils.Toast(res.message, 2000);
      if (res.code === 200) {
        this.$store.commit("login/setLoginType", 1);
      }
    },
  },
};
</script>
