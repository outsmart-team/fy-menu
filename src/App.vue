<template>
  <div id="app">
    <Menu :data="data"></Menu>
    <!-- <fy-menu>
      submenu对应两部分，一部分是标题，一部分是点击标题所展开的内容
      <fy-submenu>
        <template slot="title">导航一</template>
        <fy-menu-item>选项1-1</fy-menu-item>
        <fy-menu-item>选项1-2</fy-menu-item>
      </fy-submenu>
      <fy-menu-item>导航二</fy-menu-item>
      <fy-menu-item>导航三</fy-menu-item>
    </fy-menu>-->
    <router-view />
  </div>
</template>
<script>
import Menu from "./components/fy-menu";

export default {
  components: {
    Menu
  },
  data() {
    return {
      data: [
        {
          name: "导航一",
          id: 1,
          children: [
            { name: "选项1-1", id: 1.1 },
            { name: "选项1-2", id: 1.2 },
            { name: "选项1-3", id: 1.3 }
          ]
        },
        { name: "导航二", id: 2 },
        { name: "导航三", id: 3 }
      ]
    };
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
