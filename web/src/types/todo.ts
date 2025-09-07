export interface CreateTodoRequest {
    title: string;
    description: string;
}

export interface UpdateTodoRequest {
    completed: boolean;
}

// export interface TodoResponse {
//     id: string;
//     title: string;
//     description: string;
//     completed: boolean;
// }


export interface Todo {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

export type TodoFilter = 'all' | 'active' | 'completed';