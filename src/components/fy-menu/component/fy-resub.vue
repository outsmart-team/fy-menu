<template>
  <fy-submenu>
    <template slot="title">{{data.name}}</template>
    <template v-for="child in data.children">
      <Resub v-if="child.children" :data="child.children" :key="child.id"></Resub>
      <fy-menu-item v-else :key="child.id">{{child.name}}</fy-menu-item>
    </template>
  </fy-submenu>
</template>
<script>
import fySubmenu from "./fy-submenu";
import fyMenuItem from "./fy-menu-item";
export default {
  name: "Resub",
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    fySubmenu,
    fyMenuItem
  }
};
</script>