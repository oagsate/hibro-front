<template>
  <div>
    <div class="basic-info">
      <img :src="self.avatar ? staticHost + self.avatar : 'default.jpg'" alt="" />
      <div class="info-item" v-for="item in infoCfg" :key="item.index">
        <div>{{ item.word }}：</div>
        <div>{{ getInfoText(item) }}</div>
      </div>
      <div class="self-desc">
        <div>{{ self.description }}</div>
      </div>
    </div>
    <div class="my-thought">
      <div class="title-area">
        <div class="title-word">我的想法</div>
        <div class="title-button" @click="visible = true">
          <Button icon="plus">发表</Button>
        </div>
      </div>
      <div class="thoughts">
        <ThoughtList :thoughts="thoughts" @itemClick="handleThoughtDelete" :enableDelete="true" />
        <a-pagination
          style="float:right;margin-top:20px;"
          v-model="current"
          :total="total"
          @change="fetchThought"
        />
      </div>
    </div>
    <a-modal
      v-model="visible"
      title="发表想法"
      @ok="createThought"
      @cancel="thought = undefined"
      :closable="false"
      :maskClosable="false"
    >
      <a-textarea :rows="6" v-model="thought" />
    </a-modal>
  </div>
</template>
<script>
import moment from "moment";
import Button from "@/components/Button";
import ThoughtList from "@/components/ThoughtList";
import { mapState, mapGetters } from "vuex";
import store from "@/store";
const statusCfg = {
  0: "单身",
  1: "恋爱中",
  2: "已婚"
};
const orientationCfg = {
  0: "异性恋",
  1: "同性恋",
  2: "双性恋",
  3: "其他"
};
const genderCfg = {
  0: "女",
  1: "男"
};
const educationCfg = {
  0: "初中",
  1: "高中",
  2: "大专",
  3: "本科",
  4: "硕士",
  5: "博士"
};
const infoCfg = [
  {
    index: "name",
    word: "昵称"
  },
  {
    index: "gender",
    word: "性别",
    render: v => {
      return genderCfg[v];
    }
  },
  {
    index: "createTime",
    word: "注册时间",
    render: v => {
      return moment(v * 1000).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  {
    index: "lastTime",
    word: "最近登录",
    render: v => {
      return moment(v * 1000).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  {
    index: "birthday",
    word: "出生日期",
    render: v => {
      return moment(v * 1000).format("YYYY-MM-DD HH:mm:ss");
    }
  },
  {
    index: "status",
    word: "情感状态",
    render: v => {
      return statusCfg[v];
    }
  },
  {
    index: "height",
    word: "身高",
    render: v => {
      return v + " cm";
    }
  },
  {
    index: "weight",
    word: "体重",
    render: v => {
      return v + " 斤";
    }
  },
  {
    index: "education",
    word: "教育程度",
    render: v => {
      return educationCfg[v];
    }
  },
  {
    index: "location",
    word: "所在地",
    render: v => {
      const location = store.state.area.find(e => e.areaid === v);
      const parent = location && store.state.area.find(e => e.areaid === location.parentid);
      return `${parent && parent.areaname} ${location && location.areaname}`;
    }
  }
];
export default {
  components: {
    Button,
    ThoughtList
  },
  data() {
    return {
      infoCfg,
      visible: false,
      thought: undefined,
      thoughts: [],
      current: 1,
      total: 0,
      staticHost: appGlobals.staticHost
    };
  },
  computed: {
    ...mapState(["self"])
  },
  mounted() {
    this.fetchThought(1);
  },
  methods: {
    getInfoText(item) {
      const temp = this.self[item.index];
      if (temp === undefined) {
        return "暂未填写";
      }
      if (item.render) {
        return item.render(temp);
      } else {
        return temp;
      }
    },
    createThought() {
      const thought = this.thought.trim();
      if (thought) {
        this.$http
          .post("/thought", {
            content: thought
          })
          .then(res => {
            if (res) {
              this.$message.success("添加成功");
              this.visible = false;
              this.thought = undefined;
              this.fetchThought(1);
            }
          });
      }
    },
    fetchThought(current) {
      this.$http.get("/thought/-1", { params: { start: current, size: 10 } }).then(res => {
        if (res) {
          this.thoughts = res.list;
          this.total = res.total;
        }
      });
    },

    handleThoughtDelete(id) {
      this.$confirm({
        title: "确认操作",
        content: "确定删除该项内容吗？",
        onOk: () => {
          this.$http.delete(`/thought/${id}`).then(res => {
            if (res) {
              this.$message.success("删除成功");
              this.fetchThought(1);
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import url("~@/common.less");
.basic-info {
  display: grid;
  grid-template-columns: 300px 1fr 1fr;
  grid-template-rows: repeat(7, 1fr);
  img {
    width: 300px;
    height: 300px;
    grid-row-start: 1;
    grid-row-end: 8;
  }
}
.info-item {
  display: flex;
  align-items: center;
  div:first-child {
    width: 100px;
    text-align: right;
    font-weight: bold;
  }
}

.self-desc {
  grid-row-start: 6;
  grid-row-end: 8;
  grid-column-start: 2;
  grid-column-end: 4;
  padding: 5px 100px;
  color: @text;
}

.my-thought {
  margin-top: 50px;
}

.title-area {
  background-color: @background2;
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
}

.title-word {
  font-weight: bold;
  font-size: 16px;
}

.title-button {
  width: 60px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  background-color: @background1;
}

.thoughts {
  overflow: hidden;
}
</style>
