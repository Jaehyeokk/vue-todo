<template>
	<div class="todo-list">
		<div class="container">
			<PerfectScrollbar tag="ul" class="todo-list">
				<transition-group name="list" tag="ul" class="todo-list">
					<li
						v-for="(todo_item, index) in cs_todoItems"
						:key="todo_item.seq"
						class="todo-list-item"
					>
						<el-checkbox v-model="todo_item.checked" style="color: #eaf1fb">{{
							todo_item.todo_item
						}}</el-checkbox>
						<div class="btns-wrap">
							<span
								class="edit-btn"
								@click="clickEditBtn({ todo_item, index })"
							>
								<i class="el-icon-edit"></i>
							</span>
							<span class="remove-btn" @click="removeTodo({ todo_item, index })"
								><i class="el-icon-delete"></i
							></span>
						</div>
						<input
							class="edit-input"
							type="text"
							:value="todo_item.todo_item"
							@keyup.enter="editTodo({ todo_item, index })"
						/>
					</li>
				</transition-group>
			</PerfectScrollbar>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { PerfectScrollbar } from 'vue2-perfect-scrollbar';
import _ from 'lodash';
import { mapGetters, mapState } from 'vuex';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';
import { PayloadObj } from '@/store/mutations';

export default Vue.extend({
	components: {
		PerfectScrollbar,
	},

	data() {
		return {
			edit_input: '',
		};
	},

	computed: {
		...mapGetters(['getTodoItems']),
		...mapState(['date', 'active_tab']),
		cs_todoItems() {
			const filteredDateUnit = _.filter(this.getTodoItems, {
				date_unit: this.active_tab,
			});
			const filteredDate = _.filter(filteredDateUnit, { date: this.date });
			return filteredDate;
		},
	},

	methods: {
		clickEditBtn(obj: PayloadObj) {
			// Vue.js 에서의 정확한 DOM 접근 다시 생각해보기
			const todo_items = document.querySelectorAll('.edit-input');
			const edit_item = todo_items[obj.index] as HTMLInputElement;
			for (const item of todo_items) {
				const typed = item as HTMLInputElement;
				typed.style.display = 'none';
			}
			edit_item.style.display = 'block';
			edit_item.innerText = obj.todo_item.todo_item;
		},
		editTodo(obj: PayloadObj) {
			const todo_items = document.querySelectorAll('.edit-input');
			const edit_item = todo_items[obj.index] as HTMLInputElement;
			const new_item = edit_item.value;
			const new_obj = {
				...obj.todo_item,
				todo_item: new_item,
			};
			this.$store.commit('editTodoItem', { obj, new_obj });
			edit_item.style.display = 'none';
		},
		removeTodo(obj: PayloadObj) {
			this.$store.commit('removeTodoItem', obj);
		},
	},
});
</script>

<style scoped>
.container {
	width: 80%;
	min-height: 200px;
	margin: 0 auto;
}

.ps {
	height: 200px;
}

.todo-list {
	padding-right: 5px;
}

.todo-list-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	margin-bottom: 10px;
	font-weight: 500;
	font-size: 15px;
	color: #eaf1fb;
}

.todo-text {
	padding: 0 20px;
}

.edit-btn {
	cursor: pointer;
	color: #c0c4cc;
}

.edit-input {
	display: none;
	z-index: 99;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	padding: 5px 10px;
	background-color: #353a40;
	border: none;
	border-radius: 4px;
	color: #fff;
	outline: none;
}

.remove-btn {
	margin-left: 10px;
	color: #c0c4cc;
	cursor: pointer;
}

.list-enter-active,
.list-leave-active {
	transition: all 1s;
}

.list-enter,
.list-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
</style>
