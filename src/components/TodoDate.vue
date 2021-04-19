<template>
  <div class="todo-date">
    <div class="container">
      <div class="date-picker">
        <el-date-picker
          v-if="propsActiveTab === 'day'"
          v-model="date_day"
          type="date"
          placeholder="Pick a date"
          @change="handleDate"
        >
        </el-date-picker>
        <el-date-picker
          v-else-if="propsActiveTab === 'week'"
          v-model="date_week"
          type="week"
          format="Week WW"
          placeholder="Pick a week"
          @change="handleDate"
        >
        </el-date-picker>
        <el-date-picker
          v-else-if="propsActiveTab === 'month'"
          v-model="date_month"
          type="month"
          placeholder="Pick a month"
          @change="handleDate"
        >
        </el-date-picker>
        <el-date-picker
          v-else-if="propsActiveTab === 'year'"
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
export default {
  props: ["propsActiveTab"],
  data() {
    return {
      date_day: "",
      date_week: "",
      date_month: "",
      date_year: "",
    };
  },
  watch: {
    propsActiveTab() {
      this.handleDate();
    },
  },
  methods: {
    handleDate() {
      if (this.propsActiveTab === "day") {
        this.$emit("emitDate", this.date_day);
      } else if (this.propsActiveTab === "week") {
        this.$emit("emitDate", this.date_week);
      } else if (this.propsActiveTab === "month") {
        this.$emit("emitDate", this.date_month);
      } else if (this.propsActiveTab === "year") {
        this.$emit("emitDate", this.date_year);
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
