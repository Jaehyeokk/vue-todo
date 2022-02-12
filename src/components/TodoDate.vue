<template>
	<div class="todo-date">
		<div class="container">
			<div class="date-picker">
				<el-date-picker
					v-model="s_date"
					:type="active_tab === 'Day' ? 'date' : active_tab.toLowerCase()"
					:placeholder="`Pick a ${active_tab.toLowerCase()}`"
					@change="handleDate"
					value-format="yyyy-MM-dd"
				>
				</el-date-picker>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
	data() {
		return {
			s_date: '',
		};
	},

	computed: {
		...mapState(['active_tab', 'date']),
	},

	methods: {
		handleDate() {
			this.$store.commit('selectDate', this.s_date);
		},
	},

	mounted() {
		this.s_date = this.date;
	},
});
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
