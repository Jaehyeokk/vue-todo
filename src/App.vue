<template>
	<div class="todo-app">
		<TodoWeather></TodoWeather>
		<TodoHeader></TodoHeader>
		<TodoDate></TodoDate>
		<TodoInput></TodoInput>
		<TodoList></TodoList>
		<TodoFooter></TodoFooter>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import '@/assets/css/reset.css';
import '@/assets/css/common.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/element-ui.css';
import TodoWeather from '@/components/TodoWeather.vue';
import TodoHeader from '@/components/TodoHeader.vue';
import TodoDate from '@/components/TodoDate.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFooter from '@/components/TodoFooter.vue';

export default Vue.extend({
	name: 'app',
	components: {
		TodoWeather,
		TodoHeader,
		TodoDate,
		TodoInput,
		TodoList,
		TodoFooter,
	},
});
</script>

<style scoped>
.todo-app {
	max-width: 768px;
	height: 100vh;
	margin: 0 auto;
	border-radius: 5px;
	background-color: #3b424a;
}
</style>
