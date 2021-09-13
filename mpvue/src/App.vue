<script>
export default {
  onLaunch(options) {
    console.info("app  ----  onLaunch", options);

    //检查更新
    if (wx.canIUse("getUpdateManager")) {
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: "更新提示",
              content: "新版本已经准备好，是否重启应用？",
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  updateManager.applyUpdate();
                  // 判断是否要授权
                }
              },
            });
          });
        }
      });
    }
  },
  async onShow(options) {
    console.info("app  ----  onShow", options);
  },
  onHide(options) {
    console.info("app  ----  onHide", options);
  },
  created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
  },
};
</script>

<style lang="scss">
@import "./assets/styles/reset.scss";
</style>
