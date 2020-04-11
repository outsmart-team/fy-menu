<template>
  <fy-submenu :level="level" @change="change" :showChange="showChange">
    <template slot="title">{{data.meta.title}}</template>
    <template v-for="(child, index) in data.children">
      <fy-resub v-if="child.children" :data="child" :key="child.name" :level="Number(index)+2"></fy-resub>
      <fy-menu-item v-else :key="child.name" :pathData="child">{{child.meta.title}}</fy-menu-item>
    </template>
  </fy-submenu>
</template>
<script>
import fySubmenu from "./fy-submenu";
import fyMenuItem from "./fy-menu-item";
export default {
  name: "fyResub",
  data() {
    return {
      showChange: false
    }
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    level: {
      type: Number,
      default: 1
    }
  },
  components: {
    fySubmenu,
    fyMenuItem
  },
  methods: {
    change(val) {
      console.log(this.$refs)
      if (!val) {
        // 展开动作，先关闭所有

        this.showChange = false
      } else {
        // 关闭动作
      }
      console.log(val)

    }
  }
};
</script>