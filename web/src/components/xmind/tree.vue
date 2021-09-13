<template>
  <div class="vue-tree-node">
    <div class="vue-tree-node-label">
      <div class="vue-tree-node-label-inner">{{model.label}}</div>
    </div>
    <div class="vue-tree-node-children" v-show="isFolder">
      <tree v-for="item in model.children" :model="item" :key="item.id">
      </tree>
    </div>
  </div>
</template>

<script>
export default {
  name: "tree",
  props: ["model"],
  computed: {
    // 是否还有子列表需要渲染，作为v-if的判断条件
    isFolder() {
      return this.model.children && this.model.children.length;
    }
  }
};
</script>

<style>
</style>
