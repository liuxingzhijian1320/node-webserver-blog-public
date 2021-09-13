<template>
  <div class="home">
    <myheader></myheader>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <div class="myfooter">
      <myfooter></myfooter>
    </div>
  </div>
</template>

<script>
import myheader from "src/components/myheader/myheader";
import myfooter from "src/components/myfooter/myfooter";
export default {
  name: "home",
  components: {
    myheader,
    myfooter
  }
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.app-content {
  flex: 1;
  padding-top: 64px;
  z-index: 10;
}
.myfooter {
  height: 60px;
}
</style>
