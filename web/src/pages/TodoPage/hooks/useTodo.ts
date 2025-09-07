import type { TodoFilter } from "@/types/todo";
import type { Todo } from "@/types/todo";
import { useMemo, useState, useEffect } from "react";
import { calculateStats, filterTodos } from "../utils/todoUtils";
import { todoApi } from "@/services/api/todoApi";

export const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<TodoFilter>("all");
    const [isLoading, setIsLoading] = useState(false);
    const [updatingTodos, setUpdatingTodos] = useState<Set<string>>(new Set());

    useEffect(() => {
      fetchTodos();
    }, []);

    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        const response = await todoApi.getAllTodos();
        setTodos(response.data || []);
      } catch (error) {
        console.error("Error fetching todos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    const addTodo = async (title: string, description: string) => {
      try {
        const newTodo = await todoApi.createTodo({title, description});

        setTodos(prev => [newTodo.data, ...prev]);
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    };

    const filteredTodos = useMemo(() => {
      return filterTodos(todos, filter);
    }, [todos, filter]);

    const toggleTodo = async (id: string, completed: boolean) => {
      if (updatingTodos.has(id)) {
        console.log(`Todo ${id} is already being updated, skipping...`);
        return;
      }

      try {
        setUpdatingTodos(prev => new Set([...prev, id]));
        const updatedTodo = await todoApi.updateTodo(id, completed);
        console.log("updatedTodo", updatedTodo);
        setTodos(prev =>
          prev.map(todo =>
            todo.id === id ? updatedTodo.data : todo
          )
        );
      } catch (error) {
        console.error("Error toggling todo:", error);
      } finally {
        setUpdatingTodos(prev => {
          const newSet = new Set(prev);
          newSet.delete(id);
          return newSet;
        });
      }
    };

    const deleteTodo = async(id: string) => {
      try {
        const success = await todoApi.deleteTodo(id);
        if (success) {
            setTodos(prev => prev.filter(todo => todo.id !== id));
        }
    } catch (error) {
        console.error("Error deleting todo:", error);
    }
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
        isLoading,
        isUpdatingTodo: (id: string) => updatingTodos.has(id)
      };
}
