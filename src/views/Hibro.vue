<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo">hi, bro!</div>
      <a-menu theme="dark" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">广场</a-menu-item>
        <a-menu-item key="2">主页</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px;margin-top:50px;">
      <div :style="{ background: '#fff', padding: '24px', height: '100%' }">Content</div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Created By oagsate
    </a-layout-footer>
  </a-layout>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.layout {
  height: 100%;
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
