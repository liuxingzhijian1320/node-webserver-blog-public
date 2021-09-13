<template>
  <div class="home">
    <myheader></myheader>
    <div class="app-content" :class="{'has-pb': showminnav }">
      <router-view></router-view>
    </div>
    <div class="myfooter">
      <myfooter></myfooter>
    </div>
    <div class="has-min-nav" v-if="showminnav">
      <mintabbar></mintabbar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import myheader from "src/components/myheader/myheader";
import myfooter from "src/components/myfooter/myfooter";
import mintabbar from "src/components/myheader/mintabbar";

const whiteList = ["index", "article", "user"]; // 移动端 底部的 tabbar
export default {
  name: "home",
  data() {
    return {
      showminnav: false,
    };
  },
  components: {
    myheader,
    myfooter,
    mintabbar,
  },
  computed: {
    ...mapGetters({
      showNavByMin: "login/showNavByMin",
    }),
  },

  watch: {
    $route(to, from) {
      if (whiteList.indexOf(to.name) > -1) {
        this.showminnav = true;
      } else {
        this.showminnav = false;
      }
    },
  },
  mounted() {
    // 移动端
    if (whiteList.indexOf(this.$route.name) > -1) {
      this.showminnav = true;
    } else {
      this.showminnav = false;
    }
  },
  methods: {},
};
</script>

<style lang="scss">
.has-min-nav {
  display: none;
}
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.app-content {
  flex: 1;
  // padding-top: 64px;
  z-index: 10;
}
.myfooter {
  height: 60px;
  display: block;
}

@media screen and (max-width: 750px) {
  .app-content {
    &.has-pb {
      padding-top: 0px;
      padding-bottom: 60px;
    }
  }

  .myfooter {
    display: none;
  }
  .has-min-nav {
    display: block;
  }
}
</style>
