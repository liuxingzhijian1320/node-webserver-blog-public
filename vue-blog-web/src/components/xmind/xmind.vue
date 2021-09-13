<style lang="scss">
@import "./vue-tree.scss";
.vue-tree {
  font-size: 18px;
}
// // 去除顶层线条
// .vue-tree > .vue-tree-node {
//   padding-top: 0;
//   &:after {
//     border-left: 0;
//   }
// }
// // 每个标签样式
// .vue-tree-node-label {
//   display: inline-block;
//   .vue-tree-node-label-inner {
//     margin: 0 10px;
//     padding: 10px 15px;
//     border-radius: 3px;
//     box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
//     text-align: center;
//   }
// }
// .vue-tree-node-children {
//   position: relative;
//   display: flex;
//   padding-top: 20px;
//   // margin: 0;
//   // padding: 0;
//   &:before {
//     position: absolute;
//     top: 0;
//     left: 50%;
//     width: 0;
//     height: 20px;
//     border-left: 1px solid #ddd;
//     content: "";
//   }
// }
// .vue-tree {
//   display: flex;
//   text-align: center;
// }

// .vue-tree-node {
//   position: relative;
//   padding-top: 20px;
//   // margin: 0;
//   // padding: 0;
//   &:before {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 50%;
//     height: 19px;
//     content: "";
//   }
//   &:after {
//     position: absolute;
//     top: 0;
//     left: 0;
//     left: 50%;
//     width: 50%;
//     height: 19px;
//     border-left: 1px solid #ddd;
//     content: "";
//   }
//   &:not(:first-child):before,
//   &:not(:last-child):after {
//     border-top: 1px solid #ddd;
//   }
// }
</style>
<template>
  <div>
    <div class="vue-tree dc ">
      <tree v-for="item in list" :model="item" :key="item.id"></tree>
    </div>
  </div>
</template>

<script>
import tree from "./tree.vue";
export default {
  components: {
    tree
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
                  children: []
                },
                {
                  id: 12,
                  label: "webpack",
                  children: []
                }
              ]
            },
            {
              id: 2,
              label: "后端",
              children: [
                {
                  id: 21,
                  label: "koa2"
                },
                {
                  id: 22,
                  label: "JWT"
                }
              ]
            },
            {
              id: 3,
              label: "数据库",
              children: [
                {
                  id: 31,
                  label: "mysql"
                },
                {
                  id: 32,
                  label: "sequelize"
                }
              ]
            },
            {
              id: 4,
              label: "部署",
              children: [
                {
                  id: 41,
                  label: "阿里云服务器"
                },
                {
                  id: 42,
                  label: "nginx反向代理"
                },
                {
                  id: 43,
                  label: "pm2"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>


