
<style lang="scss" scoped>
@media screen and (max-width: 750px) {
  .min-nav {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: #f5f5f5;
    z-index: 100;
    display: flex;
    .nav-item {
      flex: 1;
      text-align: center;
      transition: all 0.3s ease;
      &.router-link-exact-active {
        background-image: linear-gradient(90deg, #4ebbaa, #6bc30d);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .nav-item-icon {
      }
      .unit-icon {
        color: #333;
        font-size: 30px;
      }
      .nav-item-text {
        font-size: 18px;
        color: #333;
      }
    }
  }
}
</style>

<template>
  <div class="min-nav">
    <router-link class="nav-item" v-for="(item, index) in minNavList"
      :key="index" tag="div" :to="item.path">
      <div class="nav-item-icon">
        <span class="iconfont unit-icon" :class="item.icon"></span>
      </div>
      <div class="nav-item-text">{{item.name}}</div>
    </router-link>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      userInfo: "login/userInfo",
      minNavList: "menu/minNavList",
      showNavByMin: "login/showNavByMin",
    }),
  },
  watch: {
    $route(to, from) {
      this.$store.commit("login/setNavStatusByMin", true);

      // 移动端
      if (to.name === "detail") {
        this.$store.commit("login/setNavStatusByMin", false);
      }
    },
  },
  mounted() {
    // 移动端
    if (this.$route.name === "detail") {
      this.$store.commit("login/setNavStatusByMin", false);
    }
  },
  methods: {},
  created() {},
};
</script>
