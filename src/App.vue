<template>
  <div id="app">
    <div class="home">
      <div class="content">
        <router-view />
      </div>
      <div class="bottom-bar" >
        <tabbar></tabbar>
      </div>
    </div>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar";
export default {
  name: "LAYOUT",
  components: {tabbar},
  data() {
    return {

    };
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.bottom-bar {
  height: 98px;
}
.content {
  flex: 1;
  overflow: auto;
}
</style>
