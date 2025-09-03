# Go parameters
APP_NAME = todo-list
CMD_DIR = ./cmd/api
BINARY = ./bin/$(APP_NAME)

## Run project (without Air, just go run)
run: 
	@echo "🚀 Building $(APP_NAME)..."
	@go run $(CMD_DIR)

## Run project with Air (hot reload)
air:
	@echo "🔥 Running $(APP_NAME) with Air..."
	@go -c .air.toml

## Build project
build: 
	@echo "🚀 Building $(APP_NAME)..."
	@go build -o $(BINARY) $(CMD_DIR)

# =================
# Docker Commands
# =================

## Build Docker image
docker-build:
	@echo "🐳 Building Docker image..."
	@docker build -t $(APP_NAME):latest .


