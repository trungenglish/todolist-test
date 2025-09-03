package models

import "time"

type Todo struct {
	ID          uint      `json:"id"`
    Content     string    `json:"content"`           
    Completed   bool      `json:"completed"`      
    CreatedAt   time.Time `json:"created_at"`
    UpdatedAt   time.Time `json:"updated_at"`  
}

type CreateTodoRequest struct {
    Content string `json:"content" binding:"required"`
}

type UpdateTodoRequest struct {
    Content   *string `json:"content"`    
    Completed *bool   `json:"completed"`  
}

