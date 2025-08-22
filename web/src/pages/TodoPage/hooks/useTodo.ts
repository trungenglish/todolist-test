import type { TodoFilter } from "@/types/todo";
import type { Todo } from "@/types/todo";
import { useMemo, useState } from "react";
import { calculateStats, createTodo, filterTodos } from "../utils/todoUtils";

export const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<TodoFilter>("all");
    
    const addTodo = (text: string) => {
      const newTodo = createTodo(text);
      setTodos(prev => [newTodo, ...prev]);
    };

    const filteredTodos = useMemo(() => {
      return filterTodos(todos, filter);
    }, [todos, filter]);

    const toggleTodo = (id: string) => {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };

    const deleteTodo = (id: string) => {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    const stats = useMemo(() => {
      return calculateStats(todos);
    }, [todos]);

    return {
        todos,
        filter,
        filteredTodos,
        setFilter,
        setTodos,
        toggleTodo,
        deleteTodo,
        addTodo,
        stats
      };
}
