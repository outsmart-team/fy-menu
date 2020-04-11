<template>
  <ul>
    <slot></slot>
  </ul>
</template>
<script>
export default {
  name: 'fy-menu',
  data() {
    return {
      childrens: []
    };
  },
  mounted() {
    this.splitChild(this.$children);
  },
  watch: {
    $route(newRoute) {
      // 给当前菜单高亮
      let currentItem = this.childrens.filter(item => {
        item.active = false;
        return item.pathData.name === newRoute.name;
      });
      currentItem[0].active = true;
    }
  },
  methods: {
    splitChild(children) {
      // 遍历所有的子节点
      children.forEach(child => {
        if (child.$children && child.$children.length === 0) {
          this.childrens.push(child);
        } else {
          this.splitChild(child.$children);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  position: fixed;
  top: 0;
  left: 0;
  width: 142px;
  padding-top: 35px;
  padding-left: 35px;
  height: 100%;
  background: #12141b;
  li {
    cursor: pointer;
    list-style: none;
    line-height: 30px;
  }
}
</style>