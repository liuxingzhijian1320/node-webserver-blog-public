<style lang="scss">
@import "./vue-tree.scss";
.vue-tree {
  font-size: 18px;
}

@media screen and (max-width: 750px) {
  .vue-tree {
    display: -webkit-box;
    /* width: 1000px; */
    overflow-x: scroll;
  }
}
</style>
<template>
  <div>
    <div class="vue-tree dc">
      <tree v-for="item in list" :model="item" :key="item.id"></tree>
    </div>
  </div>
</template>

<script>
import tree from "./tree.vue";
export default {
  components: {
    tree,
  },
  data() {
    return {
      list: [
        {
          id: 0,
          label: "博客",
          children: [
            {
              id: 1,
              label: "前端",
              children: [
                {
                  id: 11,
                  label: "vue",
                  children: [],
                },
                {
                  id: 12,
                  label: "pwa",
                  children: [],
                },
              ],
            },
            {
              id: 2,
              label: "后端",
              children: [
                {
                  id: 21,
                  label: "egg",
                },
                {
                  id: 22,
                  label: "JWT",
                },
                {
                  id: 23,
                  label: "nodemailer",
                },
                {
                  id: 24,
                  label: "短信",
                },
              ],
            },
            {
              id: 3,
              label: "数据库",
              children: [
                {
                  id: 31,
                  label: "mysql",
                },
              ],
            },
            {
              id: 4,
              label: "部署",
              children: [
                {
                  id: 41,
                  label: "阿里云服务器(2核2G5M)",
                },
                {
                  id: 42,
                  label: "nginx",
                },
                {
                  id: 43,
                  label: "pm2",
                },
                {
                  id: 44,
                  label: "docker",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>


