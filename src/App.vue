<template>
  <div id="app">
    <div class="content">
      <h1>Todo List</h1>
      <TodoInput />
      <UnfinishedCount />
      <TodoList />
    </div>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput.vue';
import UnfinishedCount from './components/UnfinishedCount.vue';
import TodoList from './components/TodoList.vue';

export default {
  components: {
    TodoInput,
    UnfinishedCount,
    TodoList
  }
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
}

.content {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

h1 {
  margin-bottom: 1rem;
}
</style>
