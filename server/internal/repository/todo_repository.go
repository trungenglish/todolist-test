package repository

import (
	"todo-list/internal/models"

	"github.com/google/uuid"
)

var todos []models.Todo

func CreateTodo(todo models.Todo) models.Todo {
	todo.ID = uuid.New().String()
	todos = append(todos, todo)
	return todo
}

func GetAllTodos() []models.Todo {
    return todos
}

func UpdateTodo(id string, Completed bool) (models.Todo, bool) {
	for i, t := range todos {
		if t.ID == id {
			todos[i].Completed = Completed
			return todos[i], true
		}
	}
	return models.Todo{}, false
}

func DeleteTodo(id string) bool {
	for i, todo := range todos {
		if todo.ID == id {
			todos = append(todos[:i], todos[i+1:]...)
			return true
		}
	}
	return false
}