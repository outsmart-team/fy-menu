<template>
  <fy-menu>
    <template v-for="menu in data">
      <fy-resub v-if="menu.children" :key="menu.id" :data="menu"></fy-resub>
      <fy-menu-item v-else :key="menu.id">{{menu.name}}</fy-menu-item>
    </template>
  </fy-menu>
</template>
<script>
import fyMenu from "./component/fy-menu";
import fyResub from "./component/fy-resub";
import fySubmenu from "./component/fy-submenu";
import fyMenuItem from "./component/fy-menu-item";

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {
    fyMenu,
    fyResub,
    fySubmenu,
    fyMenuItem
  }
};
</script>