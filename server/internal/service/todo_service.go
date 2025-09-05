package service

import (
	"todo-list/internal/models"
	"todo-list/internal/repository"
)

func CreateTodoService(title string, description string) models.Todo {
	todo := models.Todo{
		Title: title,
		Description: description,
		Completed: false,
	}
	return repository.CreateTodo(todo)
}

func GetAllTodosService() []models.Todo {
	return repository.GetAllTodos()
}

func UpdateTodoService(id string, Completed bool) (models.Todo, bool) {
	return repository.UpdateTodo(id, Completed)
}

func DeleteTodoService(id string) bool{
	return repository.DeleteTodo(id)
}