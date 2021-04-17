<template>
  <div class="todo-date">
    <div class="container">
      <div class="date-picker">
        <el-date-picker
          v-if="this.pick_day"
          v-model="date_day"
          type="date"
          placeholder="Pick a date"
        >
        </el-date-picker>
        <el-date-picker
          v-else-if="this.pick_week"
          v-model="date_week"
          type="week"
          format="Week WW"
          placeholder="Pick a week"
        >
        </el-date-picker>
        <el-date-picker
          v-else-if="this.pick_month"
          v-model="date_month"
          type="month"
          placeholder="Pick a month"
        >
        </el-date-picker>
        <el-date-picker
          v-else-if="this.pick_year"
          v-model="date_year"
          type="year"
          placeholder="Pick a year"
        >
        </el-date-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-if
      pick_day: true,
      pick_week: false,
      pick_month: false,
      pick_year: false,
      // v-model
      date_day: "",
      date_week: "",
      date_month: "",
      date_year: "",
    };
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
