<template>
  <div>
    <TodoHeader></TodoHeader> 
    <TodoInput></TodoInput> 
    <TodoList></TodoList> 
    <TodoFooter></TodoFooter> 
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
export default {
  name: 'app',
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter,
  }

}
</script>

<style>

</style>