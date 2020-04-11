<template>
  <li @click="changeRoute" ref="item" :class="active ? 'active': ''">
    <i v-if="lvCalc">· </i>
    <slot></slot>
  </li>
</template>
<script>
export default {
  data() {
    return {
      active: false
    };
  },
  computed: {
    lvCalc(){
      return this.$parent.$options._componentTag !== 'fy-menu';
    }
  },
  props: {
    pathData: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    changeRoute(e) {
      e.stopPropagation(); // 阻止点击事件冒泡
      this.$router.push({ name: this.pathData.name });
    }
  }
};
</script>
<style lang="scss" scoped>
li:hover, li.active {
  background: #285dad;
  transition: 0.3s;
  color: #fff;
}
</style>