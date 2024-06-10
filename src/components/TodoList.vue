<template>
  <ul class="todo-list">
    <TodoItem
      v-for="(todo, index) in todos"
      :key="index"
      :todo="todo"
      :index="index"
      @remove="removeTask"
      @toggle="toggleTask"
    />
  </ul>
</template>

<script>
import { computed } from 'vue';
import { useTodoStore } from '../stores/todoStore';
import TodoItem from './TodoItem.vue';

export default {
  components: {
    TodoItem
  },
  setup() {
    const todoStore = useTodoStore();

    const todos = computed(() => todoStore.todos);

    const removeTask = (index) => {
      todoStore.removeTodo(index);
    };

    const toggleTask = (index) => {
      todoStore.toggleTodo(index);
    };

    return {
      todos,
      removeTask,
      toggleTask
    };
  }
};
</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
}
</style>
