<template>
  <div>
    <div class="basic-info">
      <img :src="info.avatar ? staticHost + info.avatar : 'default.jpg'" alt="" />
      <div class="info-item" v-for="item in infoCfg" :key="item.index">
        <div>{{ item.word }}：</div>
        <div>{{ getInfoText(item) }}</div>
      </div>
      <div class="self-desc">
        <div>{{ self.description || "暂无简介" }}</div>
      </div>
    </div>
    <div class="area">
      <div class="title-area">
        <div class="title-word">想法</div>
        <div class="title-button" v-if="homeId === -1" @click="visible = true">
          <Button icon="plus">发表</Button>
        </div>
      </div>
      <div class="list-wrapper">
        <ThoughtList
          :thoughts="thoughts"
          @itemClick="handleThoughtDelete"
          :enableDelete="homeId === -1"
        />
        <a-pagination
          v-model="currentThought"
          style="float:right;margin-top:20px;"
          :total="total"
          @change="fetchThought"
        />
      </div>
    </div>
    <div class="area">
      <div class="title-area">
        <div class="title-word">照片</div>
        <div class="title-button" v-if="homeId === -1" @click="visiblePic = true">
          <Button icon="plus">发表</Button>
        </div>
      </div>
      <div class="list-wrapper">
        <PicList :pics="pics" :enablePanel="homeId === -1" @delete="handlePicDelete" />
      </div>
      <a-pagination
        :pageSize="9"
        style="float:right;margin-top:20px;"
        :total="totalPic"
        @change="fetchPic"
        v-model="currentPic"
      />
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
    <a-modal
      v-model="visiblePic"
      title="发表照片"
      @ok="createPic"
      :closable="false"
      :maskClosable="false"
    >
      <a-form>
        <a-form-item label="标题" :labelCol="{ span: 3 }" :wrapperCol="{ span: 20 }">
          <a-input v-model="picName" />
        </a-form-item>
        <a-form-item label="照片" :labelCol="{ span: 3 }" :wrapperCol="{ span: 20 }">
          <a-upload :fileList="fileList" :beforeUpload="beforeUpload" :remove="handleRemove">
            <a-button> <a-icon type="upload" />选择图片 </a-button>
          </a-upload>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
import moment from "moment";
import Button from "@/components/Button";
import ThoughtList from "@/components/ThoughtList";
import PicList from "@/components/PicList";
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
    ThoughtList,
    PicList
  },
  data() {
    return {
      infoCfg,
      visible: false,
      thought: undefined,
      thoughts: [],
      total: 0,
      pageSelf: {},
      staticHost: appGlobals.staticHost,
      homeId: undefined,
      visiblePic: false,
      picName: undefined,
      fileList: [],
      totalPic: 0,
      pics: [],
      currentThought: 1,
      currentPic: 1
    };
  },
  computed: {
    ...mapState(["self"]),
    info() {
      if (this.homeId === -1) {
        return this.self;
      } else if (this.homeId === undefined) {
        return {};
      } else {
        return this.pageSelf;
      }
    }
  },
  watch: {
    $route() {
      this.doAfterMounted();
    }
  },
  mounted() {
    this.doAfterMounted();
  },
  methods: {
    getInfoText(item) {
      const temp = this.info[item.index];
      if (temp === undefined) {
        return "暂未填写";
      }
      if (item.render) {
        return item.render(temp);
      } else {
        return temp;
      }
    },
    doAfterMounted() {
      this.homeId = parseInt(this.$route.params.id);
      if (this.homeId !== -1) {
        this.fetchPageSelf();
      }
      this.fetchThought(1);
      this.fetchPic(1);
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
      this.$http
        .get(`/thought/${this.homeId}`, { params: { start: current, size: 10 } })
        .then(res => {
          if (res) {
            this.thoughts = res.list;
            this.total = res.total;
          }
        });
    },
    fetchPic(current) {
      this.$http.get(`/picture/${this.homeId}`, { params: { current, pageSize: 9 } }).then(res => {
        if (res) {
          this.pics = res.list;
          this.totalPic = res.total;
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
              this.currentThought = 1;
            }
          });
        }
      });
    },
    handlePicDelete(id) {
      this.$confirm({
        title: "确认操作",
        content: "确定删除该项内容吗？",
        onOk: () => {
          this.$http.delete(`/picture/${id}`).then(res => {
            if (res) {
              this.$message.success("删除成功");
              this.fetchPic(1);
              this.currentPic = 1;
            }
          });
        }
      });
    },
    fetchPageSelf() {
      this.$http.get(`/user/${this.homeId}`).then(res => {
        if (res) {
          this.pageSelf = res;
        }
      });
    },
    beforeUpload(file) {
      this.fileList = [file];
      return false;
    },
    handleRemove() {
      this.fileList = [];
    },
    createPic() {
      if (!this.picName || !this.fileList.length) {
        this.$message.warn("请完善表单");
        return;
      }
      const formData = new FormData();
      formData.set("file", this.fileList[0]);
      formData.set("name", this.picName);
      this.$http.post("/picture", formData).then(res => {
        if (res) {
          this.$message.success("上传成功");
          this.visiblePic = false;
          this.fileList = [];
          this.picName = undefined;
          this.fetchPic(1);
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

.area {
  margin-top: 50px;
  overflow: hidden;
}

.title-area {
  background-color: @background3;
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

.list-wrapper {
  overflow: hidden;
}
</style>
