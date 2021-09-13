<template>
  <div class="write-box">
    <img src="/static/avatar.png" v-if="isShow" alt="" class="avatar">
    <div class="input">
      <div class="close pointer" v-if="showClose" @click="close">关闭</div>
      <textarea class="textarea" v-model="content" cols="30" rows="10"
        :placeholder="cparams && cparams.nickname? `${userInfo.nickname} 回复 ${cparams.nickname}`:'各位拔刀吧🔪🔪🔪'"></textarea>
      <div class="bottom">
        <span v-if="userInfo && userInfo.nickname">登录昵称:
          {{userInfo.nickname}}</span>
        <div class="submit pointer" @click="submit">
          {{userInfo.username?'提交':'登录'}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Utils from "src/assets/scripts/utils";
import bus from "src/assets/scripts/bus";
import { mapGetters } from "vuex";
import Api from "src/http/api";
export default {
  data() {
    return {
      content: "",
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "login/userInfo",
      hasUserInfo: "login/hasUserInfo",
    }),
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
  },
  mounted() {
    console.log("cparams", this.cparams);
  },
  methods: {
    close() {
      bus.$emit("zhooson_blog_close_writemodel");
    },
    submit() {
      if (!this.hasUserInfo) {
        this.$router.push(`/login`);
        this.$store.commit("login/setLoginType", 1);
        return;
      }

      if (!this.content) {
        Utils.Toast("请填写评论信息哦😊😊～", 2000);
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
      console.log(13, params);

      Api.createArticleCommentToReply(params).then((res) => {
        this.content = "";
        Utils.Toast("回复成功", 2000);
        bus.$emit("zhooson_blog_close_writemodel", { reload: true });
      });
    },

    // 评论
    writeComment() {
      // 一级评论
      let params = {
        article_id: this.$route.query.id,
        content: this.content,
        user_id: this.userInfo.userId,
      };
      console.log(13, params);

      Api.createArticleComment(params).then((res) => {
        console.log(res);
        this.content = "";
        Utils.Toast("评论成功", 2000);
        bus.$emit("zhooson_blog_close_writemodel", { reload: true });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.write-box {
  display: flex;
  font-size: 14px;
  .avatar {
    width: 45px;
    height: 45px;
    margin-right: 10px;
  }
  .input {
    overflow: hidden;
    flex: 1;

    position: relative;
    .close {
      position: absolute;
      right: 5px;
      top: 5px;
      color: #999;
    }
  }
  .textarea {
    display: block;
    padding: 15px 30px 15px 15px;
    min-height: 80px;
    width: 100%;
    border: 1px solid #999;
    font-size: 14px;
    resize: none;
    letter-spacing: 4px;
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
    height: 40px;
    border: 1px solid #999;
    border-top: 0;
    line-height: 40px;
    padding-left: 15px;
    color: #999;
    .submit {
      float: right;
      width: 92px;
      height: 100%;
      background: #5788aa;
      color: #fff;
      text-align: center;
      font-size: 16px;
      line-height: 40px;
    }
  }
}

@media screen and (max-width: 750px) {
  .avatar {
    display: none;
  }
  .textarea {
    // padding: 15px 30px 15px 15px;
    // min-height: 80px;
    // width: 100%;
    border: 1px solid #999;
    font-size: 14px;
    resize: none;
    letter-spacing: 4px;
  }
}
</style>
