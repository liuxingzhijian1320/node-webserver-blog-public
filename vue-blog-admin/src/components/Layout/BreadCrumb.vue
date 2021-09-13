<template>
  <div id="BreadCrumb">

    <el-breadcrumb separator="/">
      <transition-group name="slide">
        <el-breadcrumb-item v-for="(item) in breadList" :to="item.path"
          :key="item.path+item.meta.title">{{ item.meta.title }}
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>

  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  data() {
    return {
      breadList: []
    };
  },
  watch: {
    $route: {
      handler(route) {
        let allList = route.matched.filter(item => {
          if (item.meta && item.meta.title) {
            if (item.redirect) {
              item.path = item.redirect;
            }
            return true;
          }
        });
        if (allList[0].path !== "/" && allList[0].path !== "/dashbord") {
          allList.unshift({ path: "/", meta: { title: "首页" } });
        }
        this.breadList = allList;
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter,
.slide-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.slide-move {
  transition: all 0.5s;
}

.slide-leave-active {
  position: absolute;
}
</style>
