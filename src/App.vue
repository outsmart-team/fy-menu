<template>
  <div id="app">
    <Menu :data="$router.options.routes"></Menu>
    <div class="view">
      <router-view />
    </div>
  </div>
</template>
<script>
import Menu from "./components/fy-menu";

export default {
  components: {
    Menu
  },
};
</script>
<style lang="scss">
html,body {
  height: 100%;
  background: #0a0b0f;
  color: #c2c4cd;
}
html,
body,
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
  color: #c2c4cd;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c2c4cd;
  height: 100%;
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
.view {
  margin-left: 179px;
  height: 100%;
  background: #12141b;
  color: #c2c4cd;
}
</style>
