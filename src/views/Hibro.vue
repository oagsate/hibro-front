<template>
  <a-layout class="layout">
    <a-layout-header style="position:fixed;width:100%;z-index:1;">
      <div style="width:100%;max-width:1100px;margin-left:auto;margin-right:auto;">
        <div class="logo">hi, bro!</div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :selectedKeys="current"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="square"
            ><router-link :to="{ name: 'square' }">广场</router-link></a-menu-item
          >
          <a-menu-item key="myHome"
            ><router-link :to="{ name: 'myHome' }">我的主页</router-link></a-menu-item
          >
        </a-menu>
      </div>
    </a-layout-header>
    <a-layout-content
      style="margin-top:114px;width:100%;max-width:1100px;margin-left:auto;margin-right:auto;"
    >
      <div :style="{ background: '#fff', padding: '24px' }">
        <router-view />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Created By oagsate
    </a-layout-footer>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      current: undefined
    };
  },
  watch: {
    $route() {
      this.setCurrent();
    }
  },
  mounted() {
    this.setCurrent();
  },
  methods: {
    setCurrent() {
      this.current = [this.$route.name];
    }
  }
};
</script>
<style lang="less" scoped>
.layout {
  min-height: 100%;
}
.logo {
  width: 120px;
  float: left;
  color: #fff;
  line-height: 64px;
  font-size: 32px;
  text-align: center;
  margin-right: 20px;
}
</style>
