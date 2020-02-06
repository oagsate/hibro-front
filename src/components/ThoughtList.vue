<template>
  <div class="thought-list">
    <div class="thought-item" v-for="item in thoughts" :key="item.id">
      <img class="thought-avatar" src="a.jpg" />
      <div style="float:left;margin-left:10px;">
        <div>
          <span class="thought-author">{{ item.name }}</span>
          <span style="padding-left:5px;padding-right:5px;">发表于</span>
          <span>{{ formatTime(item.createTime) }}</span>
        </div>
        <div class="thought-content">{{ item.content }}</div>
      </div>
      <div class="thought-panel">
        <Button v-if="enableDelete" type="danger" @click="$emit('itemClick', item.id)">删除</Button>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import Button from "@/components/Button";
export default {
  components: {
    Button
  },
  props: {
    thoughts: {
      default: () => {
        return [];
      },
      type: Array
    },
    enableDelete: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    formatTime(timestamp) {
      return moment(timestamp * 1000).format("MM-DD HH:mm");
    }
  }
};
</script>
<style lang="less" scoped>
@import url("~@/common.less");
.thought-panel {
  float: right;
  margin-top: 15px;
  display: none;
  margin-right: 20px;
}

.thought-item:hover .thought-panel {
  display: block;
}

.thought-item {
  margin: 15px 0;
  overflow: hidden;
  &:hover {
    background-color: @background2;
  }
  .thought-avatar {
    width: 60px;
    height: 60px;
    float: left;
  }

  .thought-author {
    color: @text;
  }

  .thought-content {
    line-height: 35px;
  }
}
</style>
