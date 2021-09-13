<style lang="scss" scoped>
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
  padding: 60px 30px 60px 30px;
  width: 90%;
  border-radius: 12px;
  background: #fff;
  animation: rotate 0.3s ease-in;
  .login-btn {
    position: absolute;
    top: 40px;
    left: 40px;
    color: #999;
    font-size: 32px;
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
  margin-bottom: 40px;
  text-align: center;
  font-weight: 600;
  font-size: 36px;
}
.tips {
  display: inline;
  color: #999;
  text-decoration: underline;
  font-size: 20px;
}
.close {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  .unit-close {
    font-size: 30px;
  }
}
.input-div {
  height: 120px;
  font-size: 32px;
  display: flex;
  margin-bottom: 20px;
  .input {
    flex: 1;
    padding: 0 40px;
    width: 100%;
    height: 100px;
    outline: none;
    border: 1px solid #999;
    border-radius: 6px;
    &:focus {
      outline: none;
      border: 1px transparent solid;
      // background-image: $bg-border;
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
    }
  }
  .code {
    margin-left: 20px;
    border-radius: 6px;
    height: 100px;
    width: 200px;
    font-size: 32px;
    color: #999;
    border: 1px solid #999;
  }
}
.submit {
  margin-top: 40px;
  width: 100%;
  height: 100px;
  border-radius: 12px;
  background-image: linear-gradient(90deg, #4ebbaa, #6bc30d);
  color: #fff;
  text-align: center;
  font-size: 32px;
  &.disbaled {
    opacity: 0.5;
    pointer-events: none;
  }
}
.login-ways {
  margin-top: 40px;
  .line {
    position: absolute;
    display: inline-block;
    content: "";
    height: 1px;
    background: #666;
    top: 50%;
    transform: translateY(-50%);
    width: 200px;
  }
  .ways {
    font-size: 28px;
    color: #666;
    text-align: center;
    position: relative;
    // &:after {
    //   @extend .line;
    //   left: 0;
    // }
    // &:before {
    //   @extend .line;
    //   right: 0;
    // }
  }
  .href-list {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    .href {
      width: 64px;
      height: 64px;
      margin: 30px 0;
      img {
        display: block;
        cursor: pointer;
      }
    }
  }
}
</style>
<template>
  <div class="login dc">

    <!-- 注册 -->
    <div class="content" v-if="loginType == 2">
      <div class="login-btn pointer" @click="optBtn(1)">登录</div>
      <h3 class="title lg">注册</h3>
      <div class="close dc" @click="close">
        <i class="iconfont icon-close unit-close"></i>
      </div>
      <div class="input-div">
        <input type="text" class="input"
          placeholder-style="color: #ccc; font-size: 28rpx"
          v-model.trim="formData.nickname" placeholder="起个牛逼点的昵称吧~" />
      </div>
      <div class="input-div">
        <input type="number" class="input"
          placeholder-style="color: #ccc; font-size: 28rpx"
          v-model.trim="formData.username" placeholder="手机号（登录账号）" />
        <div class="code dc pointer" @click="getCode">
          {{show ? count + 's' : '获取验证码'}}
        </div>
      </div>
      <div class="input-div">
        <input type="number" class="input"
          placeholder-style="color: #ccc; font-size: 28rpx"
          v-model.trim="formData.code" placeholder="验证码" />
      </div>
      <div class="input-div">
        <input type="password" class="input"
          placeholder-style="color: #ccc; font-size: 28rpx"
          v-model.trim="formData.password" placeholder="登录密码" />
      </div>
      <div class="input-div">
        <input type="password" class="input"
          placeholder-style="color: #ccc; font-size: 28rpx"
          v-model.trim="formData.repassword" placeholder="确认登录密码" />
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
        <i class="iconfont icon-close unit-close"></i>
      </div>
      <div class="input-div">
        <input type="text" placeholder-style="color: #ccc; font-size: 28rpx"
          class="input" v-model.trim="formData.username" placeholder="登录账号" />
      </div>
      <div class="input-div">
        <input type="password" placeholder-style="color: #ccc; font-size: 28rpx"
          class="input" v-model.trim="formData.password" placeholder="登录密码" />
      </div>
      <div class="submit dc" @click="login">
        登录
      </div>
    </div>

  </div>
</template>
<script>
import md5 from "js-md5";
import { showToast } from "@/assets/scripts/feedback";
import { loginGetCode, loginWebsite, registerWebsite } from "@/assets/api";
const TIME_COUNT = 60;

export default {
  name: "user",
  data() {
    return {
      loginType: 1,
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
  components: {},
  methods: {
    async login() {
      const { username, password } = this.formData;
      if (!username || username.length != 11) {
        showToast("请填写手机号哦😊😊～");
        return;
      } else if (!password) {
        showToast("请填写密码哦😊😊～");
        return;
      }

      const res = await loginWebsite({ username, password: md5(password) });
      showToast(res.message);
      wx.setStorageSync("userInfo", JSON.stringify(res.data));
      wx.setStorageSync("userInfo-token", res.data.token);
      wx.navigateBack();
    },
    async getCode() {
      const { username } = this.formData;
      if (!username || username.length != 11) {
        showToast("请填写正确的手机号哦😊😊");
        return;
      }

      if (!this.timer) {
        // 发送验证码接口
        await loginGetCode({ username }).then((res) => {
          showToast(res.message);
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
      this.loginType = opt;
    },
    close() {
      wx.navigateBack();
    },
    // 注册
    async register() {
      const { username, nickname, code, password, repassword } = this.formData;
      if (!nickname) {
        showToast("请填写帅气的昵称哦😊😊～");
        return;
      } else if (!username) {
        showToast("请填写手机号哦😊😊～");
        return;
      } else if (!code || code.length != 6) {
        showToast("请填写正确的验证码哦😊😊～");
        return;
      } else if (!password || !repassword) {
        showToast("请填写密码哦😊😊～");
        return;
      } else if (password != repassword) {
        showToast("两次密码不一致😊😊～");
        return;
      }

      // 注册接口
      const res = await registerWebsite({
        ...this.formData,
        password: md5(password),
        repassword: md5(repassword),
      });
      showToast(res.message);
      this.formData = {
        ...this.formData,
        nickname: "",
        code: "",
        password: "",
        repassword: "",
        id: 0,
      };
      this.loginType = 1;
    },
  },
  async onLoad({ type }) {
    // Object.assign(this.$data, this.$options.data());
    this.loginType = type || 1;
  },

  async onShow() {},
};
</script>
