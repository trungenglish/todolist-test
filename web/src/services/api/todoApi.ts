import axiosInstance from "@/lib/axiosInstance";
import type { ApiResponse } from "@/types/apiResponse";
import type { Todo } from "@/types/todo";

export const todoApi = {
    getAllTodos: async () => {
        const response = await axiosInstance.get<ApiResponse<Todo[]>>("/tasks");
        return response.data;
    },

    createTodo: async (data: { title: string; description: string }) => {
        const response = await axiosInstance.post("/tasks", data);
        return response.data;
    },

    updateTodo: async (id: string, completed: boolean) => {
        const response = await axiosInstance.put(`/tasks/${id}`, { completed });
        console.log("response", response);
        return response.data;
    },

    deleteTodo: async (id: string) => {
        const response = await axiosInstance.delete(`/tasks/${id}`);
        return response.data.success;
    }
}