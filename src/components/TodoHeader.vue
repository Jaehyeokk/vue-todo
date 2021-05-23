<template>
  <div class="todo-header">
    <div class="container">
      <el-tabs v-model="active_tab" @tab-click="handleTab">
        <el-tab-pane
          v-for="tab in date_tabs"
          :key="tab"
          :label="tab"
          :name="tab"
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      active_tab: "Day",
    };
  },
  computed: {
    ...mapState(["date_tabs"]),
  },
  mounted() {
    this.handleTab();
  },
  methods: {
    handleTab() {
      this.$store.commit("selectTab", this.active_tab);
    },
  },
};
</script>
