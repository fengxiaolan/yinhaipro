<!--
 * @Description: 底部菜单
 * @Author: fengxl
 * @Date: 2020-11-10
-->
<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item name="home" to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item name="message" to="/message" icon="chat-o">消息</van-tabbar-item>
    <van-tabbar-item name="address" to="/address" icon="orders-o">通讯录</van-tabbar-item>
    <van-tabbar-item name="about" to="/about" icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      active: "home"
    };
  }
}
</script>

<style scoped>

</style>