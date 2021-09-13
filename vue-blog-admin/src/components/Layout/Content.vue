<template>
  <div class="mycontent" :class="{'minWidth':isCollapse}">
    <el-scrollbar>
      <div class="main" :style="{'minHeight':pageheight+'px'}">
        <transition name="fade-page" mode="out-in">
          <router-view />
        </transition>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Utils from "src/assets/scripts";
export default {
  name: "mycontent",
  data() {
    return {
      pageheight: window.innerHeight - 50 - 20 - 1
    };
  },
  mounted() {
    /**
     *  50 header 高度
     *  1  mycontent margin-top: 1px;
     *  20 mycontent padding:20 0;
     */
    window.addEventListener(
      "resize",
      Utils.throttle(() => {
        this.pageheight = window.innerHeight - 50 - 20 - 1;
      }, 500),
      false
    );
  },
  computed: {
    ...mapGetters({
      isCollapse: "app/isCollapse"
    })
  }
};
</script>

<style lang="scss" scoped>
.mycontent {
  position: fixed;
  top: 50px;
  right: 0;
  bottom: 0;
  left: 200px;
  z-index: 11 !important;
  overflow: hidden;
  box-sizing: border-box;
  margin-top: 1px;
  padding: 0 20px;
  background: #f0f3f4;
  -webkit-transition: all 0.3s;
  transition: left 0.3s;
  &.minWidth {
    left: 64px !important;
  }
  .main {
    box-sizing: border-box;
    margin-top: 20px;
    padding-bottom: 20px;
    background: #fff;
  }
  .el-scrollbar {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: hidden !important;
    }
  }
}
</style>
