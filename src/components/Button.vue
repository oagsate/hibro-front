<template>
  <div class="button" @click="$emit('click')" :style="{ backgroundColor: `rgb(${bgColor})` }">
    <a-icon v-if="icon" :type="icon" style="padding-right:5px;" /><slot></slot>
  </div>
</template>
<script>
const bgColorCfg = {
  primary: "27, 140, 184",
  danger: "232, 156, 186",
  warn: "247, 231, 156"
};
export default {
  props: {
    type: String,
    icon: String
  },
  computed: {
    bgColor() {
      return bgColorCfg[this.type] || bgColorCfg.primary;
    }
  }
};
</script>
<style lang="less" scoped>
@primary: rgb(27, 140, 184);
@danger: rgb(232, 156, 186);
@warn: rgb(247, 231, 156);
.button {
  min-width: 60px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  text-align: center;
  color: #fff;
}

.button:hover {
  opacity: 0.8;
}
</style>
