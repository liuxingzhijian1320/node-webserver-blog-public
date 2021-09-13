<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <qqurl></qqurl>
    <logout v-if="logoutStatus"></logout>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import qqurl from "./components/qqurl/qqurl";
import logout from "./components/logout/logout";
const runtime = require("offline-plugin/runtime");
export default {
  name: "App",
  methods: {},
  components: {
    qqurl,
    logout,
  },
  computed: {
    ...mapGetters({
      logoutStatus: "login/logoutStatus",
    }),
  },
  beforeMount() {
    runtime.install({
      onUpdating: () => {
        console.log("SW Event:", "onUpdating");
      },
      onUpdateReady: () => {
        console.log("SW Event:", "onUpdateReady");
        // Tells to new SW to take control immediately
        runtime.applyUpdate();
      },
      onUpdated: () => {
        console.log("SW Event:", "onUpdated");
        // Reload the webpage to load into the new version
        window.location.reload();
      },

      onUpdateFailed: () => {
        console.log("SW Event:", "onUpdateFailed");
      },
    });
  },
};
</script>

<style lang="scss">
@import "src/assets/styles/common.scss";
</style>
