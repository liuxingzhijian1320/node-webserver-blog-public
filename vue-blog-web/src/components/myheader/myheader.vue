<template>
  <header :class="activeHeaderBg">
    <div class="layout">
      <nav class="indigo">
        <div class="brand-logo">
          <logo></logo>
        </div>
        <div class="brand-menu">
          <ul class="nav-ul">
            <router-link tag="li" :to="{path:item.path}" class="nav-li pointer"
              v-for="(item,index) in list" :key="index">
              <div class="title">{{item.name}}</div>
            </router-link>
            <li class="nav-li pointer" v-if="!userInfo.username" @click="login">
              登录
            </li>
            <li class="nav-li lg" v-if="userInfo.username">
              {{userInfo.username}}</li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import { mapGetters } from "vuex";
import logo from "src/components/logo/logo";
export default {
  components: {
    logo
  },
  data() {
    return {
      activeHeaderBg: "",
      userinfo: {}
    };
  },
  computed: {
    ...mapGetters({
      list: "menu/nav",
      userInfo: "login/userInfo"
    })
  },
  watch: {
    $route(to, from) {
      this.judeg(to.name);
    }
  },
  methods: {
    login() {
      this.$store.commit("login/setShow", true);
    },
    judeg(name) {
      switch (name) {
        case "index":
          this.activeHeaderBg = "gray";
          break;
        default:
          this.activeHeaderBg = "white";
          break;
      }
    }
  },
  created() {
    this.judeg(this.$route.name);
  }
};
</script>

<style lang="scss" scoped>
@import "src/assets/styles/common.scss";

header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background: $color-bg;
  color: #414240;
  &.gray {
    background: $color-bg;
  }
  &.white {
    background: #fff;
  }
}
.indigo {
  display: flex;
  height: 64px;
  line-height: 64px;
}
.brand-logo {
  width: 165px;
}
.brand-menu {
  flex: 1;
}
.nav-ul {
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
  .nav-li {
    display: inline-block;
    padding: 0 20px;
    &.router-link-exact-active,
    &:hover {
      background-image: linear-gradient(90deg, #4ebbaa, #6bc30d);
      -webkit-background-clip: text;

      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
