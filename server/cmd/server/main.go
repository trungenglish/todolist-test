package main

import (
	"log"
	"todo-list/internal/routes"
	"todo-list/config"
)

func main() {

  cfg := config.LoadConfig()

	router := routes.SetupRouter(cfg)

	log.Println("Server starting on http://localhost:8080")
	if err := router.Run(":8080"); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
