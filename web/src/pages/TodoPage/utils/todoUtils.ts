import type { Todo, TodoFilter } from "@/types/todo";

export const createTodo = (title: string, description: string): Todo => ({
  id: crypto.randomUUID(),
  title: title.trim(),
  description: description.trim(),
  completed: false,
  createdAt: new Date(),
});

export const filterTodos = (todos: Todo[], filter: TodoFilter): Todo[] => {
  switch (filter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

export const calculateStats = (todos: Todo[]) => {
  const total = todos.length;
  const completed = todos.filter(todo => todo.completed).length;
  const active = total - completed;
  return { total, completed, active };
};
