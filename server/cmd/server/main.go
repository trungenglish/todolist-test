package main

import (
	"todo-list/internal/routes"
)

func main() {
  router := routes.SetupRouter()

  router.Run(":8080") 
}