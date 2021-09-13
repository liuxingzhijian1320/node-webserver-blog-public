<template>
  <div class="interest">
    <div class="interest-desc interest-width dc">
      兴趣爱好
    </div>

    <div class="interest-item interest-width" v-for="(item,index) in list"
      :key='index'>
      <div class="bg"
        :style="{background: `url(${require(`./images/i-${index+1}.png`)}) no-repeat`}">
      </div>
      <div class="mask">
        <div class="title">{{item.title}}</div>
        <div class="subtitle">{{item.subtitle}}</div>
      </div>
      <div class="slide"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "美食",
          subtitle: "吃货一枚，每周都去吃大众点评霸王餐"
        },
        {
          title: "旅游",
          subtitle: "在自己活腻的地方跑到别人活腻的地方，然后在回来继续"
        },
        {
          title: "游戏",
          subtitle: "游戏迷，吃鸡，LOL，王者等"
        },
        {
          title: "运动",
          subtitle: "喜欢有氧健身，有规律打球，跑步，爬山等"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "src/assets/styles/common.scss";

.interest {
  overflow: hidden;
  margin: 0 auto;
  padding: 100px 0;
  max-width: 960px;
  height: 100%;
}
.interest-width {
  float: left;
  width: 300px;
}
.interest-desc {
  height: 100%;
  background: #fff;
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9,
    0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25);
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}
.interest-item {
  position: relative;
  width: 330px;
  height: 200px;
  &:hover {
    .slide {
      height: 200px;
    }
    .title {
      margin-top: 40px;
    }
    .subtitle {
      display: block;
      margin-top: 30px;
    }
  }
  .bg {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: 100% 100%;
  }
  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
  }
  .slide {
    position: absolute;
    right: 0;
    bottom: 0px;
    left: 0;
    z-index: 5;
    height: 0;
    background-image: linear-gradient(rgba(#4ebbaa, 0.4), rgba(#6bc30d, 0.4));
    transition: all 0.3s linear;
  }

  .title {
    margin-top: 70px;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-size: 20px;
    transition: all 0.3s linear;
  }
  .subtitle {
    display: none;
    margin-top: 50px;
    padding: 0 20px;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-size: 16px;
    transition: all 0.3s linear;
  }
}
</style>
