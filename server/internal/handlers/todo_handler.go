package handlers

import (
	"todo-list/internal/service"
	"github.com/gin-gonic/gin"
	"net/http"
	
)

type CreateTodoRequest struct {
	Title       string `json:"title" binding:"required"`
	Description string `json:"description" binding:"required"`
}

func CreateTodoHandler(c *gin.Context) {
	var req CreateTodoRequest
	if err := c.ShouldBindJSON(&req); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }

    todo := service.CreateTodoService(req.Title, req.Description)
    c.JSON(http.StatusCreated, todo)
}