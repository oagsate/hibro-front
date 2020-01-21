<template>
  <div>
    <div class="basic-info">
      <img src="a.jpeg" alt="" />
      <div class="info-item" v-for="item in infoCfg" :key="item.index">
        <div>{{ item.word }}：</div>
        <div>{{ getInfoText(item) }}</div>
      </div>
    </div>
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
  }
];
export default {
  data() {
    return {
      self: {},
      infoCfg
    };
  },
  mounted() {
    this.fetchInfo();
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
    }
  }
};
</script>
<style lang="less" scoped>
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
</style>
