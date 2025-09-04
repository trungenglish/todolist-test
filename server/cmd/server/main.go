package main

import (
	"todo-list/internal/routes"
)

func main() {
  router := routes.SetupRouter()

  router.Run() // listen and serve on 0.0.0.0:8080
}