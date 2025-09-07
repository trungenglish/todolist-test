package routes

import (
	"todo-list/config"
	"todo-list/internal/handlers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRouter(cfg *config.Config) *gin.Engine {
	r := gin.Default()

	r.Use(cors.New(cfg.SetupCORS()))

	r.GET("/tasks", handlers.GetAllTodosHandler)
	r.POST("/tasks", handlers.CreateTodoHandler)
	r.PUT("/tasks/:id", handlers.UpdateTodoHandler)
	r.DELETE("/tasks/:id", handlers.DeleteTodoHandler)

	return r
}
