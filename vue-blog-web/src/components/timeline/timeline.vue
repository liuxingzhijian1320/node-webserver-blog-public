<template>
  <section class="container">
    <div id="timeline">
      <div class="item">
        <div class="content">
          <p>
            SmohanTimeLine是一款基于原生JavaScript的支持移动端的时间轴插件，大小仅仅4KB。需要简单的配置，就可以完成你的时间轴，记录流转的时光。
          </p>
        </div>
      </div>
      <div class="item">
        <div class="content">
          werwer
        </div>
      </div>
      <div class="item">
        <div class="content">
          sdfsdfsdf
        </div>
      </div>
      <div class="item">
        <div class="content">
          <p>
            SmohanTimeLine是一款基于原生JavaScript的支持移动端的时间轴插件，大小仅仅4KB。需要简单的配置，就可以完成你的时间轴，记录流转的时光。SmohanTimeLine是一款基于原生JavaScript的支持移动端的时间轴插件，大小仅仅4KB。需要简单的配置，就可以完成你的时间轴，记录流转的时光。
          </p>
        </div>
      </div>
      <div class="item">
        <div class="content">
          <h2>我加个标题</h2>
          <p>
            5个进程，你没有看错是5个进程！！！而且这几个进程相互守护，无法彻底杀死，十双筷子哟，牢牢抱成团。到目前为止，从来没见过一款应用会起这么多进程。为了知道他为什么要启动这么多进程，我们怀着好奇的心，反编译了蜻蜓的app。结果发现了一些很奇怪的事情。5个进程，你没有看错是5个进程！！！而且这几个进程相互守护，无法彻底杀死，十双筷子哟，牢牢抱成团。到目前为止，从来没见过一款应用会起这么多进程。为了知道他为什么要启动这么多进程，我们怀着好奇的心，反编译了蜻蜓的app。结果发现了一些很奇怪的事情。
          </p>
        </div>
      </div>
      <div class="item">
        <div class="content">
          werwerwer
        </div>
      </div>
      <div class="item">
        <div class="content">
          werwerwerwer
        </div>
      </div>
      <div class="item">
        <div class="content">
          <p>
            5个进程，你没有看错是5个进程！！！而且这几个进程相互守护，无法彻底杀死，十双筷子哟，牢牢抱成团。到目前为止，从来没见过一款应用会起这么多进程。为了知道他为什么要启动这么多进程，我们怀着好奇的心，反编译了蜻蜓的app。结果发现了一些很奇怪的事情。
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
require("src/assets/scripts/timeLine");
export default {
  name: "timeline",
  data() {
    return {
      myTimeLine: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.myTimeLine = timeLine("#timeline", {
        item: ".item",
        margin: 120, //左右之间的间距
        top: 20, //距离上一个item的间距
        minTop: 10, //如在手机下显示，可以将上下间距适当缩小
        resize: true, //监听窗口变化
        minScreen: 640 //当窗口小于640时，单列显示
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  min-width: 480px;
  max-width: 1200px;
  width: 86%;

  #timeline {
    position: relative;
    margin-top: 20px;
    min-height: 660px;

    .line {
      position: absolute;
      top: -20px;
      width: 2px !important;
      height: 0;
      background-color: #c8c8c8 !important;
    }

    .item {
      position: absolute;
      visibility: hidden;
      clear: both;
      overflow: hidden;
      min-height: 80px;
    }

    .item .content {
      overflow: hidden;
      padding: 15px;
      background: #fff;
    }

    .item .point,
    .item .corner {
      position: absolute;
      z-index: 2;
      display: block;
    }

    .item .point {
      /*此处涉及CSS3，如需兼容IE6-8，请修改为图片，中间小圆点*/
      width: 16px;
      height: 16px;
      border-radius: 100%;
      background-color: #fff;
    }

    .item .point:before {
      position: absolute;
      top: 3px;
      left: 3px;
      /*此处涉及CSS3，如需兼容IE6-8，可忽略，点上的那个绿点，可直接做图片到 point上*/
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: #70ca10;
      content: "";
    }

    .item.isLeft .corner {
      top: 27px;
    }

    .item.isLeft .point {
      top: 30px;
    }

    .item.isRight .corner {
      top: 37px;
    }

    .item.isRight .point {
      top: 40px;
    }

    .item .corner {
      /*此处涉及CSS3，如需兼容IE6-8，请修改为图片，箭头*/
      border: 12px solid transparent;
    }

    .item.isLeft .corner {
      left: 100%;
      border-left-color: #fff;
    }

    .item.isRight .corner {
      right: 100%;
      border-right-color: #fff;
    }

    .item img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
}
</style>
