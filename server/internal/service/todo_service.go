package service

import (
	"todo-list/internal/models"
	"todo-list/internal/repository"
)

func CreateTodoService(title string, description string) models.Todo {
	todo := models.Todo{
		Title: title,
		Description: description,
	}
 
	return repository.CreateTodo(todo)
}