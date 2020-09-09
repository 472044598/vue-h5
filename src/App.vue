<template>
  <div id="app">
    <router-view />
    <Tabr :items="items" />
  </div>
</template>
<script>
import Tabr from "@/components/Tabbar/index";
export default {
  components: {
    Tabr,
  },
  data() {
    return {
      items: [
        {
          title: "首页",
          path: "/",
          icon: "home-o",
        },
        {
          title: "分类",
          path: "/Sort",
          icon: "search",
        },
        {
          title: "购物车",
          path: "/ShopCar",
          icon: "friends-o",
        },
        {
          title: "我的",
          path: "/Main",
          icon: "setting-o",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "./assets/css/reset.css";
</style>
