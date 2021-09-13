
<style lang="scss" scoped>
.commentlist {
  margin-top: 40px;
}
.callback {
  color: #337ab7;
  font-size: 28px;
}

.ul {
  padding: 0 30px;
  color: #333;
  font-size: 28px;
}
.li {
  margin-bottom: 20px;
}
.li-item {
  display: flex;
}
.img {
  width: 90px;
  height: 90px;
  background: #ccc;
  border-radius: 8px;
  font-size: 40px;
  color: #fff;
}
.top {
  flex: 1;
  padding-left: 30px;
}
.value {
  margin-bottom: 20px;
  word-break: break-all;
}
</style>

<template>
  <div class="commentlist">
    <ul class="ul">
      <li class="li" v-for="(item,index) in list" :key="index">
        <div class="li-item">
          <!-- <img class="img" :src="item.avatar" alt=""> -->
          <div class="img dc">{{item.name}}</div>
          <div class="top">
            <div class="nickanme"><span
                style="color: #666">{{item.user && item.user.nickname || '违反规则'}}：</span>
              {{item.content}}</div>
            <div class="value">{{item.create_timeStr}} <span
                class="callback pointer"
                @click="write(1, item, index, )">{{userInfo && userInfo.nickname?'回复':'登录'}}</span>
            </div>

            <div style="margin-bottom: 10px">
              <write v-if="show&&activeIndex==index" :cparams.sync="cparams"
                :tell="2" :showClose="true">
              </write>
            </div>

            <ul>
              <li v-for="(code, codeindex) in item.replyList" :key="codeindex">
                <div class="li-item">
                  <!-- <img class="img" :src="code.avatar" alt=""> -->
                  <div class="img dc">{{code.name}}</div>
                  <div class="top">
                    <div class="nickanme"><span style="color: #666">
                        {{code.from_user && code.from_user.nickname  || '违反规则'}}
                        回复
                        {{code.to_user && code.to_user.nickname  || '违反规则'}}：</span>
                      {{code.content}}</div>
                    <div class="value">{{code.create_timeStr }}
                      <span class="callback pointer"
                        @click="write(2, item, index, code, codeindex)">{{userInfo && userInfo.username?'回复':'登录'}}</span>
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
import { getArticleCommentList } from "@/assets/api";
import { formatDate } from "@/utils";

import EventBus from "@/assets/scripts/bus";
export default {
  props: ["aid"],
  data() {
    return {
      show: false,
      activeIndex: -1,
      placeholder: "",
      cparams: {},
      list: [],

      userInfo: {},
    };
  },
  components: {
    write,
  },

  mounted() {
    EventBus.$on("setReloadComment", ({ reload = false }) => {
      this.show = false;
      if (reload) {
        this.getList();
      }
    });

    const info = wx.getStorageSync("userInfo");
    this.userInfo = info && JSON.parse(info);
    this.getList();
  },
  methods: {
    async getList() {
      let params = {
        article_id: this.aid,
      };
      const { data } = await getArticleCommentList(params);
      data.list.forEach((code) => {
        code.create_timeStr = formatDate(code.create_time);
        code.name = code.user && code.user.nickname.slice(0, 1);
        code.replyList.forEach((c) => {
          c.name = c.from_user && c.from_user.nickname.slice(0, 1);
        });
      });

      this.list = data.list;
      console.log(4, this.list);
    },
    write(type, item, index, code = {}, codeindex = 0) {
      // 未登录
      if (!this.userInfo.nickname) {
        wx.navigateTo({
          url: "/pages/login/main",
        });
      } else {
        // console.log(123, index, item, code, codeindex);
        if (type === 2) {
          this.activeIndex = index + "-" + codeindex;
          this.cparams = {
            article_id: item.article_id,
            comment_id: item.id,
            from_id: this.userInfo.userId,
            to_id: code.from_user && code.from_user.id,
            nickname: code.from_user && code.from_user.nickname,
          };
        } else {
          this.activeIndex = index;
          // 回复
          this.cparams = {
            article_id: item.article_id,
            comment_id: item.id,
            from_id: this.userInfo.userId,
            to_id: item.user && item.user.id,
            nickname: item.user && item.user.nickname,
          };
        }
        this.show = true;
      }
    },
  },
  onLoad() {},
};
</script>
