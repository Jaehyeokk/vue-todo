<template>
	<div class="todo-footer">
		<div class="container">
			<span class="clear-btn" @click="clearAll">Clear All</span>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		clearAll() {
			this.$store.commit('removeAllItems');
		},
	},
};
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	width: 150px;
	padding: 20px 0;
	margin: 0 auto;
}
.clear-btn {
	padding: 10px;
	border: 1px solid #353a40;
	border-radius: 10px;
	color: #c0c4cc;
	background-color: #353a40;
	cursor: pointer;
}
</style>
