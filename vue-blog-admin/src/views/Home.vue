<template>
  <div class="home">
    <myheader></myheader>
    <siderbar></siderbar>
    <mycontent></mycontent>
  </div>
</template>

<script>
import myheader from "src/components/Layout/Header";
import siderbar from "src/components/Layout/Siderbar";
import mycontent from "src/components/Layout/Content";

export default {
  name: "home",
  components: {
    myheader,
    siderbar,
    mycontent
  }
};
</script>
<style lang="scss" scoped>
</style>
