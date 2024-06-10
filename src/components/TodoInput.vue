<template>
  <div class="todo-input">
    <input v-model="newTask" placeholder="Add a new task" @keyup.enter="addTask" />
    <button @click="addTask">Add</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useTodoStore } from '../stores/todoStore';

export default {
  setup() {
    const newTask = ref('');
    const todoStore = useTodoStore();

    const addTask = () => {
      if (newTask.value.trim()) {
        todoStore.addTodo(newTask.value);
        newTask.value = '';
      }
    };

    return {
      newTask,
      addTask
    };
  }
};
</script>

<style scoped>
.todo-input {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.todo-input input {
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.todo-input button {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.todo-input button:hover {
  background-color: #0056b3;
}
</style>
