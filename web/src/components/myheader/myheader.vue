
<style lang="scss" scoped>
@import "src/assets/styles/common.scss";

.myheader {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background: $color-bg;
  color: #414240;
  box-shadow: 0 1px 10px #f5f5f5;
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
  width: 240px;
  .logo-img {
    width: 50px;
    height: 50px;
    margin-top: 5px;
  }
}
.brand-menu {
  flex: 1;
}
.nav-ul {
  display: flex;
  justify-content: flex-end;
  font-size: 15px;
  color: #333;
  .nav-li {
    display: inline-block;
    padding: 0 20px;
    position: relative;
    &.router-link-exact-active,
    &:hover {
      background-image: linear-gradient(90deg, #4ebbaa, #6bc30d);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &.nickname {
      color: #333;
      display: flex;
      .header-img {
        width: 26px;
        height: 24px;
        margin-top: 18px;
        margin-right: 5px;
      }
    }
  }
}

.animation-key {
  animation: slide 1.5s ease forwards infinite;
}
@keyframes slide {
  0% {
    transform: scale(0.8) rotate(10deg);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0.8) rotate(10deg);
  }
}

.min-nav {
  display: none;
}

@media screen and (max-width: 750px) {
  .myheader {
    display: none;
  }
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
  <div class="header-wrapper">
    <header class="myheader" :class="activeHeaderBg">
      <div class="layout">
        <nav class="indigo">
          <div class="brand-logo">
            <img class="logo-img" src="../../assets/images/logo.png" alt="">
            <!-- <logo></logo> -->
          </div>
          <div class="brand-menu">
            <ul class="nav-ul">
              <router-link tag="li" :to="{path:item.path}"
                class="nav-li pointer" v-for="(item,index) in list"
                :key="index">
                <div class="title">{{item.name}}</div>
              </router-link>
              <router-link tag="li" to="/open"
                class="nav-li pointer animation-key">
                <div class="title">开源实验室</div>
              </router-link>
              <li class="nav-li" v-if="!userInfo.nickname && show">
                <span class="opt-btn pointer" @click="login(1)">登录</span> |
                <span class="opt-btn pointer" @click="login(2)">注册</span>
              </li>
              <li class="nav-li  pointer nickname"
                v-if="userInfo.nickname && show" @click="logout">
                <img class="header-img" src="./images/header.png" alt="">
                {{userInfo.nickname}}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>

    <!-- <div class="min-nav" v-if="showNavByMin">
      <router-link class="nav-item" v-for="(item, index) in minNavList"
        :key="index" tag="div" :to="item.path">
        <div class="nav-item-icon">
          <span class="iconfont unit-icon" :class="item.icon"></span>
        </div>
        <div class="nav-item-text">{{item.name}}</div>
      </router-link>
    </div> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import logo from "src/components/logo/logo";
export default {
  components: {
    logo,
  },
  data() {
    return {
      activeHeaderBg: "",
      userinfo: {},
      show: true,
    };
  },
  computed: {
    ...mapGetters({
      list: "menu/nav",
      userInfo: "login/userInfo",
      minNavList: "menu/minNavList",
      showNavByMin: "login/showNavByMin",
    }),
  },
  watch: {
    $route(to, from) {
      this.judeg(to.name);
      this.$store.commit("login/setNavStatusByMin", true);

      if (to.name === "login") {
        this.show = false;
      } else {
        this.show = true;
      }
      // 移动端
      if (to.name === "detail") {
        this.$store.commit("login/setNavStatusByMin", false);
      }
    },
  },
  mounted() {
    if (this.$route.name === "login") {
      this.show = false;
    } else {
      this.show = true;
    }

    // 移动端
    if (this.$route.name === "detail") {
      this.$store.commit("login/setNavStatusByMin", false);
    }
  },
  methods: {
    showBar(name) {
      if (this.$route.name === name) {
        this.show = false;
      } else {
        this.show = true;
      }
    },
    logout() {
      this.$store.commit("login/setLogout", true);
    },
    login(type = 1) {
      this.$router.push(`/login`);
      this.$store.commit("login/setLoginType", type);
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
    },
  },
  created() {
    this.judeg(this.$route.name);
  },
};
</script>
