<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <login v-if="isNeedLogin"></login>
    <message v-if='status'></message>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import login from "./components/login/login";
import message from "./components/message/message";
export default {
  name: "App",
  methods: {},
  components: {
    login,
    message
  },
  computed: {
    ...mapGetters({
      isNeedLogin: "login/isNeedLogin",
      status: "message/status"
    })
  },
  beforeMount() {}
};
</script>

<style lang="scss">
@import "src/assets/styles/common.scss";
</style>
