package routes

import (
    "github.com/gin-gonic/gin"
    "todo-list/internal/handlers"
)

func SetupRouter() *gin.Engine {
    r := gin.Default()

    r.POST("/todos", handlers.CreateTodoHandler)

    return r
}
