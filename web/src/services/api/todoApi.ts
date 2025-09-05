import axiosInstance from "@/lib/axiosInstance";

export const todoApi = {
    getAllTodos: async () => {
        const response = await axiosInstance.get("/tasks");
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