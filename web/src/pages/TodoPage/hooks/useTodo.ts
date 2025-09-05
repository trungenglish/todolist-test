import type { TodoFilter } from "@/types/todo";
import type { Todo } from "@/types/todo";
import { useMemo, useState, useEffect } from "react";
import { calculateStats, createTodo, filterTodos } from "../utils/todoUtils";
import { todoApi } from "@/services/api/todoApi";

export const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<TodoFilter>("all");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      fetchTodos();
    }, []);

    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        const todos = await todoApi.getAllTodos();
        setTodos(todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    const addTodo = async (title: string, description: string) => {
      try {
        const newTodo = await todoApi.createTodo({title, description});
        setTodos(prev => [newTodo, ...prev]);
      } catch (error) {
        console.error("Error adding todo:", error);
      }
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
        stats,
        isLoading
      };
}
