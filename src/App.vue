<template>
  <div id="app">
    <div class="home">
      <div class="content">
        <router-view />
      </div>
      <div class="bottom-bar">
        <van-tabbar v-model="active">
          <van-tabbar-item name="home" to="/home" icon="home-o"
            >首页</van-tabbar-item
          >
          <van-tabbar-item name="message" to="/message" icon="smile-o"
            >消息</van-tabbar-item
          >
          <van-tabbar-item name="address" to="/address" icon="smile-o"
            >通讯录</van-tabbar-item
          >
          <van-tabbar-item name="about" to="/about" icon="smile-o"
            >我的</van-tabbar-item
          >
        </van-tabbar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LAYOUT",
  data() {
    return {
      active: "home"
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
