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

<script>
// CSS
import '@/assets/css/reset.css';
import '@/assets/css/common.css';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/element-ui.css';
// Components
import TodoWeather from '@/components/TodoWeather';
import TodoHeader from '@/components/TodoHeader';
import TodoDate from '@/components/TodoDate';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import TodoFooter from '@/components/TodoFooter';
export default {
	name: 'app',
	components: {
		TodoWeather,
		TodoHeader,
		TodoDate,
		TodoInput,
		TodoList,
		TodoFooter,
	},
};
</script>

<style scoped>
.todo-app {
	width: 360px;
	height: 100vh;
	margin: 0 auto;
	border-radius: 5px;
	background-color: #3b424a;
}
</style>
