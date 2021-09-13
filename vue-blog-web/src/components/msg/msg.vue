<template>
  <div class="form-content">
    <div class="avatar-info">
      <img class="avatar" v-if="userInfo.avatar" :src="userInfo.avatar" />
      <img class="avatar pointer" v-if="!userInfo.avatar" src="./avatar.png"
        @click="login" />
      <div class="nickname lg">{{userInfo.username?userInfo.username:'雁过留名'}}
      </div>
      <div class="tips" v-if="!userInfo.username">(点击头像登录)</div>
    </div>
    <div class="form">
      <div class="text" :class="isShow?'active':''">
        <textarea @blur="getBlur" @focus="getFocus" v-model.trim="content"
          class="textarea" rows="5"></textarea>
      </div>
      <div class="emoji-btn">
        <div class="emoji">
        </div>
        <div class="submit dc pointer" @click="submit"
          :class="!userInfo.username?'disabled':''">
          发布
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Api from "src/http/api";
import Utils from "src/assets/scripts/utils";

export default {
  components: {},
  computed: {
    ...mapGetters({
      userInfo: "login/userInfo"
    })
  },
  data() {
    return {
      content: "",
      isShow: false
    };
  },
  methods: {
    getBlur() {
      this.isShow = false;
    },
    getFocus() {
      this.isShow = true;
    },
    login() {
      if (!this.userInfo.username) {
        this.$store.commit("login/setShow", true);
      }
    },
    async submit() {
      const { avatar, email, username } = this.userInfo;

      if (!this.content) {
        Utils.Toast("请填写留言信息哦😊😊～", 2000);
        return;
      }
      let params = {
        avatar,
        content: this.content,
        email: email,
        username: username
      };
      await Api.createComment(params).then(res => {
        this.content = "";
        Utils.Toast("等待管理员审核评论😊", 2000);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/common.scss";

.form-content {
  display: flex;
  margin: 0 auto;
  margin: 0 auto;
  padding: 20px;
  min-height: 120px;
  max-width: 820px;
  width: 100%;
  background-color: #fff;
  .avatar-info {
    margin-right: 20px;
    padding-top: 10px;
    width: 80px;
  }
  .form {
    flex: 1;
    margin-top: 8px;
  }
  .avatar {
    margin: 0 auto;
    width: 60px;
    height: 60px;
  }
  .nickname {
    color: #4ebbaa;
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
  }
  .tips {
    color: #999;
    font-size: 11px;
  }
  .text {
    position: relative;
    overflow: hidden;
  }
  .textarea {
    padding: 10px;
    min-height: 80px;
    max-height: 160px;
    width: 100%;
    border: 1px solid #dfdfdf;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#4ebbaa),
      to(#6bc30d)
    );
    background-image: linear-gradient(90deg, #4ebbaa, #6bc30d);
    -webkit-background-clip: text;
    font-size: 14px;
    font-size: 14px;

    &:focus {
      outline: none;
      border: 1px transparent solid;
      background-image: $bg-border;
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
    }
  }
  .emoji-btn {
    display: flex;
    width: 100%;
    .emoji {
      flex: 1;
    }
    .submit {
      width: 100px;
      height: 34px;
      border-radius: 2px;
      background-image: $bg;
      color: #fff;
      font-size: 14px;
      &.disabled {
        opacity: 0.5;
        cursor: none;
      }
    }
  }
}
</style>
