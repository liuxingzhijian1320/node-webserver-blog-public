<template>
  <div class="commentlist">
    <ul class="ul">
      <li class="li" v-for="(item,index) in list" :key="item.id">
        <div class="li-item">
          <img class="img" :src="item.avatar" alt="">
          <div class="top">
            <div class="nickanme">{{item.username}}: {{item.content}}</div>
            <div class="value">{{item.createdAt | timeStampFormat}} <span
                class="callback pointer"
                @click="write(-1, index, item)">{{hasUserInfo?'回复':'注册'}}</span>
            </div>
            <ul>
              <li v-for="(code) in item.list" :key="code.id">
                <div class="li-item">

                  <img class="img" :src="code.avatar" alt="">
                  <div class="top">
                    <div class="nickanme">{{code.username}} 回复 {{code.answer}}:
                      {{code.content}}
                    </div>
                    <div class="value">{{code.createdAt | timeStampFormat}}
                      <span class="callback pointer"
                        @click="write(-2, index, code )">{{hasUserInfo?'回复':'注册'}}</span>
                    </div>
                  </div>
                </div>
                <!-- <div style="padding-left: 30px">
                  <write v-if="show&&activeIndex==index+'-'+codeindex">
                  </write>
                </div> -->
              </li>
            </ul>
          </div>
        </div>
        <div style="padding-left: 30px">
          <write :isShow="false" @reload="reload" :cparams.sync="cparams"
            v-if="show&&activeIndex==index">
          </write>
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
      list: []
    };
  },
  components: {
    write
  },
  computed: {
    ...mapGetters({
      hasUserInfo: "login/hasUserInfo"
    })
  },
  mounted() {
    this.getList();
    bus.$on("zhooson_blog_close_writemodel", data => {
      this.show = data;
    });
  },
  methods: {
    reload(val) {
      if (val) {
        this.getList();
      }
    },
    async getList() {
      let params = {
        id: this.aid
      };
      const { data } = await Api.getArticleCommentList(params);
      this.list = data;
    },
    write(type, index, item) {
      this.activeIndex = index;

      if (type == -1) {
        // 一级评论
        this.cparams = {
          pid: item.id,
          aid: item.aid,
          answer: item.username
        };
      } else if (type == -2) {
        // 二级评论
        this.cparams = {
          pid: item.pid,
          aid: item.aid,
          answer: item.username
        };
      }
      if (!this.hasUserInfo) {
        this.$store.commit("login/setShow", true);
      } else {
        this.show = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.callback {
  color: #337ab7;
  font-size: 14px;
}

.ul {
  padding: 0 30px;
}

ul {
  color: #333;
  font-size: 14px;
  li {
    margin-bottom: 10px;
    .li-item {
      display: flex;
    }
    .img {
      width: 45px;
      height: 45px;
    }
    .top {
      flex: 1;
      padding-left: 15px;
    }
    .value {
      margin-bottom: 10px;
    }
  }
}
</style>
