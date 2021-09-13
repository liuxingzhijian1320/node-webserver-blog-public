
<style lang="scss" scoped>
.write-box {
  font-size: 28px;
  display: flex;
  width: 100%;
  .avatar {
    width: 90px;
    height: 90px;
    margin-right: 20px;
  }
  .info {
    flex: 1;
  }
  .input {
    padding: 30px 60px 30px 30px;
    overflow: hidden;
    border: 1px solid #999;
    position: relative;
    .close {
      position: absolute;
      right: 0px;
      top: 0px;
      width: 70px;
      height: 50px;
      color: #999;
      font-size: 24px;
    }
  }
  .textarea {
    display: block;
    min-height: 100px;
    width: 100%;
    font-size: 28px;
    resize: none;
    letter-spacing: 8px;
    box-sizing: border-box;
    &:focus {
      outline: none;
      border-color: #337ab7;
    }
    &:empty:before {
      color: #999;
      content: attr(placeholder);
      font-size: 16px;
    }
    &:focus {
      content: none;
    }
  }
  .bottom {
    height: 80px;
    border: 1px solid #999;
    border-top: 0;
    line-height: 80px;
    padding-left: 30px;
    color: #999;
    .submit {
      float: right;
      width: 184px;
      height: 100%;
      background: #5788aa;
      color: #fff;
      text-align: center;
      font-size: 32px;
      line-height: 80px;
    }
  }
}
</style>

<template>
  <div class="write-box">
    <img :src="avatar" v-if="isShow" alt="" class="avatar">
    <div class="info">
      <div class="input">
        <div class="close dc" v-if="showClose" @click="close">关闭</div>
        <textarea class="textarea" :placeholder="placeholder"
          v-model="content"></textarea>
      </div>
      <div class="bottom">
        <span v-if="userInfo && userInfo.nickname">登录昵称:
          {{userInfo.nickname}}</span>
        <div class="submit" @click="submit">
          {{userInfo && userInfo.nickname?'提交':'登录'}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { showToast } from "@/assets/scripts/feedback";
import {
  createArticleCommentToReply,
  createArticleComment,
} from "@/assets/api";
import EventBus from "@/assets/scripts/bus";

export default {
  data() {
    return {
      content: "",
      userInfo: {},
      placeholder: "",
      avatar: require("../../../static/images/avatar.png"),
    };
  },
  props: {
    showClose: {
      type: Boolean,
      default: false,
    },
    tell: {
      type: Number,
      default: 1, // 1 一级评论  2二级回复
    },
    isShow: {
      type: Boolean,
      default: false,
    },
    cparams: {
      type: Object,
    },
    aid: {
      type: Number,
      default: 0,
      require: true,
    },
  },
  onShow() {
    console.log(222);
  },
  mounted() {
    console.log("cparams", this.cparams);

    const info = wx.getStorageSync("userInfo");
    this.userInfo = info && JSON.parse(info);
    console.log(11111, info);

    if (this.cparams && this.cparams.nickname) {
      this.placeholder = `${this.userInfo.nickname || "违反规则"} 回复 ${
        this.cparams.nickname || "违反规则"
      }`;
    } else {
      this.placeholder = `各位拔刀吧🔪🔪🔪`;
    }
  },
  methods: {
    close() {
      EventBus.$emit("setReloadComment", {
        reload: false,
      });
    },
    submit() {
      if (!this.userInfo.username) {
        wx.navigateTo({
          url: "/pages/login/main",
        });
        return;
      }

      if (!this.content) {
        showToast("请填写评论信息哦😊😊～");
        return;
      }

      if (this.tell === 1) {
        // 评论
        console.log("评论");
        this.writeComment();
      } else {
        console.log("回复");
        // 回复
        this.writeReply();
      }
    },
    // 回复
    writeReply() {
      // 一级评论
      const { comment_id, from_id, to_id } = this.cparams;
      let params = {
        comment_id,
        from_id,
        to_id,
        content: this.content,
      };
      console.log("回复", params);

      createArticleCommentToReply(params).then((res) => {
        this.content = "";
        showToast("回复成功");
        EventBus.$emit("setReloadComment", { reload: true });
      });
    },

    // 评论
    writeComment() {
      // 一级评论
      let params = {
        article_id: this.aid,
        content: this.content,
        user_id: this.userInfo.userId,
      };
      console.log("评论", params);
      createArticleComment(params).then((res) => {
        console.log(res);
        this.content = "";
        showToast("评论成功");
        EventBus.$emit("setReloadComment", { reload: true });
      });
    },
  },
};
</script>
