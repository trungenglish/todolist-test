package config

import (
	"time"

	"github.com/gin-contrib/cors"
)

func (c *Config) SetupCORS() cors.Config {
	return cors.Config{
		AllowOrigins:     c.AllowedOrigins,
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}
}
