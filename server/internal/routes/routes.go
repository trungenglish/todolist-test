package routes

import (
    "github.com/gin-gonic/gin"
    "todo-list/internal/handlers"
)

func SetupRouter() *gin.Engine {
    r := gin.Default()

    r.GET("/tasks", handlers.GetAllTodosHandler)
    r.POST("/tasks", handlers.CreateTodoHandler)
    r.PUT("/tasks/:id", handlers.UpdateTodoHandler)
    r.DELETE("/tasks/:id", handlers.DeleteTodoHandler)
    
    return r
}
