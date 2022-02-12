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

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data() {
		return {
			date_tabs: ['Day', 'Week', 'Month', 'Year'],
			active_tab: 'Day',
		};
	},

	methods: {
		handleTab() {
			this.$store.commit('selectTab', this.active_tab);
		},
	},

	mounted() {
		this.handleTab();
	},
});
</script>
