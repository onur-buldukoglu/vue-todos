import { defineStore } from "pinia";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: [
      { id: 0, text: "Learn Vue", completed: false },
      { id: 1, text: "Develop Todo app", completed: false },
    ],
  }),
  actions: {
    addTodo(newTodoText: string) {
      if (newTodoText) {
        const lastId = this.todos[this.todos.length - 1]?.id;
        this.todos.push({ id: lastId + 1 || 0, text: newTodoText, completed: false });
      }
    },
    removeTodo(todo: Todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    toggleTodoComplete(todoId: number) {
      const todo = this.todos.find((t) => t.id === todoId);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    clearTodos() {
      this.todos = [];
    },
  },
});
