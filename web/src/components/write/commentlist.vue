
<style lang="scss" scoped>
.callback {
  color: #337ab7;
  font-size: 14px;
}

.ul {
  padding: 0 30px;
  color: #333;
  font-size: 14px;
}
.li {
  margin-bottom: 10px;
}
.li-item {
  display: flex;
}
.img {
  width: 45px;
  height: 45px;
  background: #ccc;
  border-radius: 4px;
  font-size: 20px;
  color: #fff;
}
.top {
  flex: 1;
  padding-left: 15px;
}
.value {
  margin-bottom: 10px;
  word-break: break-all;
}

@media screen and (max-width: 750px) {
  .ul {
    padding: 15px 10px;
    .img {
      width: 38px;
      height: 38px;
      border-radius: 4px;
      font-size: 16px;
    }
    .top {
      padding-left: 8px;
    }
  }
}
</style>

<template>
  <div class="commentlist">
    <ul class="ul">
      <li class="li" v-for="(item,index) in list" :key="item.id">
        <div class="li-item">
          <!-- <img class="img" :src="item.avatar" alt=""> -->
          <div class="img dc">
            {{item.user.nickname && item.user.nickname.slice(0,1)}}</div>
          <div class="top">
            <div class="nickanme"><span
                style="color: #666">{{item.user.nickname}}：</span>
              {{item.content}}</div>
            <div class="value">{{item.create_time | timeStampFormat}} <span
                class="callback pointer"
                @click="write(1, item, index, )">{{hasUserInfo?'回复':'登录'}}</span>
            </div>

            <div style="margin-bottom: 10px">
              <write v-if="show&&activeIndex==index" :cparams.sync="cparams"
                :tell="2" :showClose="true">
              </write>
            </div>

            <ul>
              <li v-for="(code, codeindex) in item.replyList" :key="code.id">
                <div class="li-item">
                  <!-- <img class="img" :src="code.avatar" alt=""> -->
                  <div class="img dc">
                    {{code.from_user.nickname && code.from_user.nickname.slice(0,1)}}
                  </div>
                  <div class="top">
                    <div class="nickanme"><span style="color: #666">
                        {{code.from_user.nickname}} 回复
                        {{code.to_user.nickname}}：</span> {{code.content}}</div>
                    <div class="value">{{code.create_time | timeStampFormat}}
                      <span class="callback pointer"
                        @click="write(2, item, index, code, codeindex)">{{hasUserInfo?'回复':'登录'}}</span>
                    </div>
                  </div>
                </div>
                <div style="padding-left: 60px">
                  <write v-if="show&&activeIndex==index+'-'+codeindex"
                    :cparams.sync="cparams" :showClose="true" :tell="2"></write>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import write from "./write";
import { mapGetters } from "vuex";
import Api from "src/http/api";
import bus from "src/assets/scripts/bus";

export default {
  props: ["aid"],
  data() {
    return {
      show: false,
      activeIndex: -1,
      placeholder: "",
      cparams: {},
      list: [],
    };
  },
  components: {
    write,
  },
  computed: {
    ...mapGetters({
      hasUserInfo: "login/hasUserInfo",
      userInfo: "login/userInfo",
    }),
  },
  mounted() {
    this.getList();
    bus.$on("zhooson_blog_close_writemodel", (data = { reload: false }) => {
      if (data.reload) {
        this.getList();
      }
      this.show = false;
    });
  },
  methods: {
    close() {},
    async getList() {
      let params = {
        article_id: this.$route.query.id,
      };
      const { data } = await Api.getArticleCommentList(params);
      this.list = data.list;
    },
    write(type, item, index, code = {}, codeindex = 0) {
      // 未登录
      if (!this.hasUserInfo) {
        this.$router.push(`/login`);
        this.$store.commit("login/setLoginType", 1);
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
  },
};
</script>
