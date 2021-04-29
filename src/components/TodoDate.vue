<template>
  <div class="todo-date">
    <div class="container">
      <div class="date-picker">
        <el-date-picker
          v-if="active_tab === 'day'"
          v-model="date_day"
          type="date"
          placeholder="Pick a date"
          @change="handleDate"
        >
        </el-date-picker>
        <el-date-picker
          v-else-if="active_tab === 'week'"
          v-model="date_week"
          type="week"
          format="Week WW"
          placeholder="Pick a week"
          @change="handleDate"
        >
        </el-date-picker>
        <el-date-picker
          v-else-if="active_tab === 'month'"
          v-model="date_month"
          type="month"
          placeholder="Pick a month"
          @change="handleDate"
        >
        </el-date-picker>
        <el-date-picker
          v-else-if="active_tab === 'year'"
          v-model="date_year"
          type="year"
          placeholder="Pick a year"
          @change="handleDate"
        >
        </el-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      date_day: "",
      date_week: "",
      date_month: "",
      date_year: "",
    };
  },
  computed: {
    ...mapState(["active_tab"]),
  },
  methods: {
    handleDate() {
      if (this.active_tab === "day") {
        this.$store.commit("selectDate", this.date_day);
      } else if (this.active_tab === "week") {
        this.$store.commit("selectDate", this.date_week);
      } else if (this.active_tab === "month") {
        this.$store.commit("selectDate", this.date_month);
      } else if (this.active_tab === "year") {
        this.$store.commit("selectDate", this.date_year);
      }
    },
  },
};
</script>

<style scoped>
.todo-date {
  border-bottom: #363d45;
}
.container {
  display: flex;
  justify-content: center;
  padding: 30px 0;
}
.date-picker {
  border: 1px solid #363d45;
  border-radius: 20px;
  background-color: #363d45;
}
</style>
