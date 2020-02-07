<template>
  <a-tabs :animated="false">
    <a-tab-pane tab="想法" key="1">
      <ThoughtList :thoughts="thoughts" />
      <a-pagination
        style="float:right;margin-top:20px;"
        :total="totalThought"
        @change="fetchThought"
      />
    </a-tab-pane>
    <a-tab-pane tab="照片" key="2">
      <PicList :pics="pics" />
      <a-pagination
        style="float:right;margin-top:20px;"
        :total="totalPic"
        :pageSize="9"
        @change="fetchPic"
      />
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import ThoughtList from "@/components/ThoughtList";
import PicList from "@/components/PicList";
export default {
  components: {
    ThoughtList,
    PicList
  },
  data() {
    return {
      thoughts: [],
      totalThought: 0,
      pics: [],
      totalPic: 0
    };
  },
  mounted() {
    this.fetchThought(1);
    this.fetchPic(1);
  },
  methods: {
    fetchThought(current) {
      this.$http.get("/thought", { params: { start: current, size: 10 } }).then(res => {
        if (res) {
          this.thoughts = res.list;
          this.totalThought = res.total;
        }
      });
    },
    fetchPic(current) {
      this.$http.get(`/picture`, { params: { current, pageSize: 9 } }).then(res => {
        if (res) {
          this.pics = res.list;
          this.totalPic = res.total;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped></style>
