package config

import (
	"log"
    "os"
    "github.com/joho/godotenv"
)

type Config struct {
	ServerPort     string
	AllowedOrigins []string
	Environment    string
}

func LoadConfig() *Config {
    
    if err := godotenv.Load(); err != nil {
        log.Printf("Warning: .env file not found: %v", err)
    }

    return &Config{
        ServerPort: getEnvOrDefault("SERVER_PORT", "8080"),
        AllowedOrigins: []string{
            getEnvOrDefault("FRONTEND_URL", "http://localhost:5173"),
        },
        Environment: getEnvOrDefault("GO_ENV", "development"),
    }
}

func getEnvOrDefault(key, defaultValue string) string {
    if value := os.Getenv(key); value != "" {
        return value
    }
    return defaultValue
}