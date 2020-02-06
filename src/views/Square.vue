<template>
  <a-tabs>
    <a-tab-pane tab="想法" key="1">
      <ThoughtList :thoughts="thoughts" />
      <a-pagination
        style="float:right;margin-top:20px;"
        v-model="currentThought"
        :total="totalThought"
        @change="fetchThought"
      />
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import ThoughtList from "@/components/ThoughtList";
export default {
  components: {
    ThoughtList
  },
  data() {
    return {
      thoughts: [],
      currentThought: 1,
      totalThought: 0
    };
  },
  mounted() {
    this.fetchThought(1);
  },
  methods: {
    fetchThought(current) {
      this.$http.get("/thought", { params: { start: current, size: 10 } }).then(res => {
        if (res) {
          this.thoughts = res.list;
          this.totalThought = res.total;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped></style>
