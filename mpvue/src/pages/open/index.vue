<style lang="scss" scoped>
.open {
  padding: 30px;
}
.title {
  font-size: 48px;
  color: #333;
}
.subtitle {
  font-size: 44px;
  color: #666;
}
h4 {
  padding: 30px 0px 20px 0px;
}

.href {
  color: #4ebbaa;
  cursor: pointer;
  font-size: 36px;
  display: block;
}

.activity {
  margin-bottom: 60px;
}
.box {
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 16px;
  transition: all 0.3s ease;
  margin-bottom: 40px;
  &:hover {
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.3);
  }
  .goods {
    max-width: 100%;
  }
  .info {
    padding-left: 40px;
    font-size: 32px;
    color: #999;
  }
  h4 {
    font-size: 36px;
  }
}
</style>
<template>
  <div class="open">
    <div class="box">
      <div class="title">1. 自游（旅游型H5）</div>

      <div class="subtitle">
        <h4>前端-h5端(vue3+vue-router+vuex)
          <a class="href" target="_blank" href="http://h.sanzhikaola.com"
            @click="copy('http://h.sanzhikaola.com')">预览地址</a>
        </h4>
        <div class="info">首页</div>
        <div class="info">订单+收藏</div>
        <div class="info">我的</div>
        <div class="info">酒店+搜索+评论</div>
        <div class="info">登录，注册，找回密码，重置密码等</div>

        <h4>前端-pc端(nuxt) <a class="href" target="_blank"
            href="http://www.sanzhikaola.com"
            @click="copy('http://www.sanzhikaola.com')">预览地址（暂时没有开发完）</a></h4>
        <div class="info">首页</div>
        <div class="info">订单+收藏</div>
        <div class="info">我的</div>
        <div class="info">酒店+搜索+评论</div>
        <div class="info">登录，注册，找回密码，重置密码等</div>

        <h4>Admin后台系统(react17 + Hook + antd4)</h4>
        <div class="info">首页</div>
        <div class="info">酒店管理（CURD）+房间（CURD）+ 上下架 + 上传图片 + 评论</div>
        <div class="info">用户管理（CURD）+ 管理员 + 超级管理 + 游客</div>
        <div class="info">订单列表</div>
        <div class="info">邮箱验证码列表</div>

        <h4>node后端（egg）</h4>
        <div class="info">接口的编写</div>
        <div class="info">jwt验证</div>
        <div class="info">评论敏感词过滤</div>
        <div class="info">发送邮件</div>

        <h4>数据库(mysql)</h4>
        <div class="info">mysql</div>

        <h4>服务器端(centos+pm2+docker)</h4>
        <div class="info">pm2 运行 koa admin h5</div>
        <div class="info">nginx 代理转发</div>
      </div>
    </div>

    <div class="box">
      <div class="title">2. cnode社区 <a class="href" target="_blank"
          href="https://github.com/liuxingzhijian1320/vue3-cnode"
          @click="copy('https://github.com/liuxingzhijian1320/vue3-cnode')">github地址</a>
        <a class="href" target="_blank" href="http://cnode.zhooson.cn"
          @click="copy('http://cnode.zhooson.cn')">预览地址</a>
      </div>
      <div class="subtitle">
        <h4>前端(vue3+vue-router+vuex)</h4>
        <div class="info">首页 </div>
        <div class="info">发表</div>
        <div class="info">个人中心</div>
        <div class="info">token登录</div>
        <div class="info">自定义的plugins的实现</div>

        <h4>服务器端(centos+pm2)</h4>
        <div class="info">pm2 运行 h5</div>
        <div class="info">nginx 代理转发</div>
      </div>
    </div>

    <div class="box">
      <div class="title">3. 个人博客 <a class="href" target="_blank"
          @click="copy('https://github.com/liuxingzhijian1320/node-webserver-blog-public')"
          href="https://github.com/liuxingzhijian1320/node-webserver-blog-public">github地址</a>
        <a class="href" target="_blank" href="https://www.zhooson.cn"
          @click="copy('https://www.zhooson.cn')">预览地址</a>
      </div>
      <div class="subtitle">
        <h4>前端(vue2+vue-router+vuex)</h4>
        <div class="info">首页 （思维导图（树状图））</div>
        <div class="info">文章 （文章列表，个人分类，热门文章，文章详情，文章目录结构）</div>
        <div class="info">个人开源（历年来的开源项目）</div>
        <div class="info">关于（关于项目介绍）</div>
        <div class="info">登录 （普通登录，Github 登录， QQ 登录）</div>

        <h4>Admin后台系统(vue2+vue-router+vuex)</h4>
        <div class="info">首页</div>
        <div class="info">分类管理（CURD）</div>
        <div class="info">文章列表：CURD，上下架，上传图片，markdown 编辑器，评论列表按钮</div>
        <div class="info">评论列表：CURD，上下架，评论， 发邮件</div>

        <h4>KOA后端(koa2)</h4>
        <div class="info">接口的编写</div>
        <div class="info">jwt验证</div>

        <h4>数据库(mysql)</h4>
        <div class="info">mysql</div>

        <h4>服务器端(centos+pm2+docker)</h4>
        <div class="info">pm2 运行 koa admin</div>
        <div class="info">docker 运行h5</div>
        <div class="info">nginx 代理转发</div>
        <div class="info">https证书绑定</div>
      </div>
    </div>

  </div>
</template>
<script>
import { showToast } from "@/assets/scripts/feedback";

export default {
  name: "open",
  data() {
    return {};
  },
  components: {},
  methods: {
    copy(url) {
      wx.setClipboardData({
        data: url,
        success: (res) => {
          showToast("复制成功");
        },
      });
    },
  },
  async onLoad() {
    Object.assign(this.$data, this.$options.data());
  },

  async onShow() {},
};
</script>
