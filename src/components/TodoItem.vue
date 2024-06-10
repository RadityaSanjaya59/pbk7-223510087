<template>
  <li class="todo-item">
    <input type="checkbox" :checked="todo.completed" @change="toggleTask" />
    <span :class="{ completed: todo.completed }">{{ todo.task }}</span>
    <button @click="removeTask">⨉</button>
  </li>
</template>

<script>
import { defineProps, defineEmits } from 'vue';

export default {
  props: {
    todo: Object,
    index: Number
  },
  emits: ['remove', 'toggle'],
  setup(props, { emit }) {
    const toggleTask = () => {
      emit('toggle', props.index);
    };

    const removeTask = () => {
      emit('remove', props.index);
    };

    return {
      toggleTask,
      removeTask
    };
  }
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.todo-item input[type="checkbox"] {
  margin-right: 0.5rem;
}

.todo-item span {
  flex-grow: 1;
}

.todo-item span.completed {
  text-decoration: line-through;
  color: #aaa;
}

.todo-item button {
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #dc3545;
  color: white;
  cursor: pointer;
}

.todo-item button:hover {
  background-color: #c82333;
}
</style>
