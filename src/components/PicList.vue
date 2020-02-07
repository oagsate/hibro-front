<template>
  <div class="list">
    <div class="item" v-for="item in pics" :key="item.id">
      <img :src="staticHost + item.uri" class="img" />
      <div class="name">{{ item.name }}</div>
      <div class="author">
        <router-link target="_blank" :to="{ name: 'home', params: { id: item.uid } }">{{
          item.username
        }}</router-link>
      </div>
      <div class="time">
        <span style="padding-left:5px;padding-right:5px;">发表于</span>
        <span>{{ formatTime(item.createTime) }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import { mapState } from "vuex";
export default {
  components: {},
  props: {
    pics: {
      default: () => {
        return [];
      },
      type: Array
    }
  },
  data() {
    return {
      staticHost: appGlobals.staticHost
    };
  },
  computed: {},
  methods: {
    formatTime(timestamp) {
      return moment(timestamp * 1000).format("MM-DD HH:mm");
    }
  }
};
</script>
<style lang="less" scoped>
@import url("~@/common.less");
.list {
  overflow: hidden;
}

.item {
  width: 300px;
  float: left;
  margin: 25px;
}

.name {
  text-align: center;
  margin-top: 10px;
}

.time {
  text-align: center;
}

.author {
  a {
    color: @text;
  }
  font-weight: bold;
  text-align: center;
}

.img {
  width: 300px;
  height: 300px;
  display: block;
  object-fit: contain;
  border: 1px dashed @background2;
}
</style>
