<template>
  <div class="list">
    <div class="item" v-for="item in pics" :key="item.id">
      <img :src="staticHost + item.uri" class="img" />
      <div class="name">{{ item.name }}</div>
      <div class="author">
        <router-link target="_blank" :to="{ name: 'home', params: { id: item.uid } }">
          {{ item.username }}
        </router-link>
      </div>
      <div class="time">
        <span style="padding-left:5px;padding-right:5px;">发表于</span>
        <span>{{ formatTime(item.createTime) }}</span>
      </div>
      <div class="panel">
        <Button
          v-if="enablePanel"
          type="primary"
          @click="jump(item)"
          class="panel-button"
          style="margin-left:50px;"
          >查看大图</Button
        >
        <Button
          v-if="enablePanel"
          type="danger"
          @click="$emit('delete', item.id)"
          class="panel-button"
          style="margin-left:40px;"
          >删除</Button
        >
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import Button from "@/components/Button";
import { mapState } from "vuex";
export default {
  components: {
    Button
  },
  props: {
    pics: {
      default: () => {
        return [];
      },
      type: Array
    },
    enablePanel: {
      default: false,
      type: Boolean
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
    },
    jump(item) {
      window.open(this.staticHost + item.uri);
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
  position: relative;
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

.panel {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
}

.item:hover .panel {
  display: block;
}

.panel-button {
  width: 80px;
  float: left;
  margin-top: 130px;
}
</style>
