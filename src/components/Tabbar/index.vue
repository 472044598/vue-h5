<template>
  <!-- <div class="Yanxuan_tab">
    <div v-for="(item,index) in items" :key="index" @click="Onclick(index)">
      <div>
        <img :src="index===Tabindex?item.imgs:item.img" alt  />
      </div>
      <div :class="index===Tabindex?'title':'Yanxuan_title'">
      {{item.title}}</div>
    </div>
  </div>-->
  <van-tabbar v-model="Tabindex">
    <van-tabbar-item
      v-for="(item,index) in items"
      :key="index"
      @click="Onclick(index)"
      :icon="item.icon"
    >{{item.title}}</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      validator: function (value) {
        return value.length <= 6;
        //市面常见的Tabbar的栏 不能超过6个
      },
    },
  },
  data() {
    return {
      item: this.items,
      Tabindex: 0,
    };
  },
  methods: {
    Onclick(index) {
      //这里是根据下标切换 图片样式跟字体颜色 动态绑定
      this.Tabindex = index;
      var temp = this.item[index];
      this.$router.push(temp.path);
    },
  },
};
</script>
<style scoped>
.Yanxuan_tab {
  width: 100%;
  height: 64px;
  border: 1px solid gainsboro;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.Yanxuan_title {
  font-size: 14px;
}
.title {
  font-size: 14px;
  color: red;
}
</style>
