<template>
  <div class="thought-list">
    <div class="thought-item" v-for="item in thoughts" :key="item.id">
      <img class="thought-avatar" :src="item.avatar ? staticHost + item.avatar : 'default.jpg'" />
      <div style="float:left;margin-left:10px;">
        <div>
          <router-link
            class="thought-author"
            target="_blank"
            :to="{ name: 'home', params: { id: item.uid } }"
            >{{ item.name }}</router-link
          >
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
import { mapState } from "vuex";
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
  data() {
    return {
      staticHost: appGlobals.staticHost
    };
  },
  computed: {
    ...mapState(["self"])
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
    background-color: @background3;
  }
  .thought-avatar {
    width: 60px;
    height: 60px;
    float: left;
  }

  .thought-author {
    color: @text;
    font-weight: bold;
  }

  .thought-content {
    line-height: 35px;
  }
}
</style>
