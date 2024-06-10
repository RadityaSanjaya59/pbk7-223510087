import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    checklists: []
  }),
  actions: {
    addTodo(task) {
      this.todos.push({ task, completed: false });
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    toggleTodo(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
    addChecklist(name) {
      this.checklists.push({ name, tasks: [] });
    },
    removeChecklist(index) {
      this.checklists.splice(index, 1);
    },
    addTaskToChecklist(checklistIndex, task) {
      this.checklists[checklistIndex].tasks.push({ task, completed: false });
    },
    toggleTaskInChecklist(checklistIndex, taskIndex) {
      const task = this.checklists[checklistIndex].tasks[taskIndex];
      task.completed = !task.completed;
    }
  },
  getters: {
    unfinishedTodoCount: (state) => {
      return state.todos.filter(todo => !todo.completed).length;
    },
    unfinishedTasksInChecklist: (state) => (index) => {
      return state.checklists[index].tasks.filter(task => !task.completed).length;
    }
  }
});
