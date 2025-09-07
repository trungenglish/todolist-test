package handlers

import (
	"net/http"
	"todo-list/internal/models"
	"todo-list/internal/service"
	"github.com/gin-gonic/gin"
)

type CreateTodoRequest struct {
	Title       string `json:"title" binding:"required"`
	Description string `json:"description" binding:"required"`
}

type UpdateTodoRequest struct {
	Completed bool `json:"completed"`
}

func CreateTodoHandler(c *gin.Context) {
	var req CreateTodoRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid request format: "+err.Error()))
		return
	}

	todo := service.CreateTodoService(req.Title, req.Description)
	c.JSON(http.StatusCreated, models.NewSuccessResponse(todo, "Todo created successfully"))
}

func GetAllTodosHandler(c *gin.Context) {
	todos := service.GetAllTodosService()
	c.JSON(http.StatusOK, models.NewSuccessResponse(todos, "Todos retrieved successfully"))
}

func UpdateTodoHandler(c *gin.Context) {
	id := c.Param("id")
	var req UpdateTodoRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, models.NewErrorResponse("Invalid request format: "+err.Error()))
		return
	}
	todo, ok := service.UpdateTodoService(id, req.Completed)
	if !ok {
		c.JSON(http.StatusNotFound, models.NewErrorResponse("Todo not found"))
		return
	}
	c.JSON(http.StatusOK, models.NewSuccessResponse(todo, "Todo updated successfully"))
}

func DeleteTodoHandler(c *gin.Context) {
	id := c.Param("id")
	if !service.DeleteTodoService(id) {
		c.JSON(http.StatusNotFound, models.NewErrorResponse("Todo not found"))
		return
	}
	c.JSON(http.StatusOK, models.NewSuccessResponse(nil, "Todo deleted successfully"))
}
