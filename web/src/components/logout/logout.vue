<style lang="scss" scoped>
.logout {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100000;
}
.content {
  padding: 30px;
  width: 30%;
  // height: 27%;
  background: #fff;
  border-radius: 10px;
}
.title {
  padding: 0px 30px;
  font-size: 26px;
  color: #333;
  text-align: center;
}
.subtitle {
  padding: 30px 0px 50px 0px;
  font-size: 22px;
  color: #888;
  text-align: center;
}
.btn-list {
  display: flex;
  justify-content: space-between;
  .btn-item {
    border-radius: 4px;
    flex: 1;
    height: 40px;
    color: #fff;
    font-size: 18px;
  }
  .close {
    margin-left: 20px;
    background: #4ebbaa;
  }
  .sure {
    background: #dfdfdf;
  }
}

@media screen and (max-width: 750px) {
  .content {
    // padding: 30px;
    width: 90%;
    // height: 27%;
  }
}
</style>
<template>
  <div class="logout dc">
    <div class="content">
      <div class="title">提示</div>
      <div class="subtitle">确认退出吗？</div>
      <div class="btn-list">
        <div class="btn-item pointer dc sure" @click="ok">确定</div>
        <div class="btn-item pointer dc close" @click="close">关闭</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "articledate",
  data() {
    return {};
  },
  methods: {
    close() {
      this.$store.commit("login/setLogout", false);
    },
    ok() {
      this.$store.commit("login/setLogout", false);
      this.$store.commit("login/clearUser");
    },
  },

  created() {},
};
</script>


