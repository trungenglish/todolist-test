import axiosInstance from "@/lib/axiosInstance";
import type { ApiResponse } from "@/types/apiResponse";
import type { TodoResponse } from "@/types/todo";

export const todoApi = {
    getAllTodos: async () => {
        const response = await axiosInstance.get<ApiResponse<TodoResponse[]>>("/tasks");
        console.log(response);
        return response.data;
    },

    createTodo: async (data: { title: string; description: string }) => {
        const response = await axiosInstance.post("/tasks", data);
        return response.data;
    },

    updateTodo: async (id: string) => {
        const response = await axiosInstance.put(`/tasks/${id}`);
        return response.data;
    },

    deleteTodo: async (id: string) => {
        const response = await axiosInstance.delete(`/tasks/${id}`);
        return response.data;
    }

}