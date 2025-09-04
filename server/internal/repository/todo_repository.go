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