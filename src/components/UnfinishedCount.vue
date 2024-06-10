<template>
  <p class="unfinished-count">Belum Selesai: {{ unfinishedTodoCount }}</p>
</template>

<script>
import { computed } from 'vue';
import { useTodoStore } from '../stores/todoStore';

export default {
  setup() {
    const todoStore = useTodoStore();

    const unfinishedTodoCount = computed(() => todoStore.unfinishedTodoCount);

    return {
      unfinishedTodoCount
    };
  }
};
</script>

<style scoped>
.unfinished-count {
  text-align: center;
  margin-bottom: 1rem;
}
</style>
