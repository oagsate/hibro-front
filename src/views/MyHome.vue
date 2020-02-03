<template>
  <div>
    <div class="basic-info">
      <img src="a.jpg" alt="" />
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
          <a-icon type="plus" /><span style="padding-left:5px;">发表</span>
        </div>
      </div>
      <div class="thought-list">
        <div class="thought-item" v-for="item in thoughts" :key="item.id">
          <img class="thought-avatar" src="a.jpg" />
          <div style="float:left;margin-left:10px;">
            <div>
              <span class="thought-author">XXX</span>
              <span style="padding-left:5px;padding-right:5px;">发表于</span>
              <span>{{ formatTime(item.createTime) }}</span>
            </div>
            <div class="thought-content">{{ item.content }}</div>
          </div>
        </div>
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
const infoCfg = [
  {
    index: "name",
    word: "昵称"
  },
  {
    index: "gender",
    word: "性别",
    render: v => {
      return v ? "男" : "女";
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
      return v;
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
      return v;
    }
  },
  {
    index: "location",
    word: "所在地",
    render: v => {
      return v;
    }
  }
];
export default {
  data() {
    return {
      self: {},
      infoCfg,
      visible: false,
      thought: undefined,
      thoughts: []
    };
  },
  mounted() {
    this.fetchInfo();
    this.fetchThought();
  },
  methods: {
    fetchInfo() {
      this.$http.get("/user/self").then(res => {
        if (res) {
          this.self = res;
        }
      });
    },
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
              this.fetchThought();
            }
          });
      }
    },
    fetchThought() {
      this.$http.get("/thought/self").then(res => {
        if (res) {
          this.thoughts = res;
        }
      });
    },
    formatTime(timestamp) {
      return moment(timestamp * 1000).format("MM-DD HH:mm");
    }
  }
};
</script>
<style lang="less" scoped>
@color: #22b14c;
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
  color: @color;
}

.my-thought {
  margin-top: 50px;
}

.title-area {
  background-color: rgba(34, 177, 76, 0.2);
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
  background-color: rgba(34, 177, 76, 0.7);
}

.thought-item {
  margin: 10px 0;
  overflow: hidden;
  .thought-avatar {
    width: 60px;
    height: 60px;
    float: left;
  }

  .thought-author {
    color: @color;
  }

  .thought-content {
    line-height: 35px;
  }
}
</style>
