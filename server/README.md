# Go Server Structure

```text
server/
├─ cmd/
│  └─ api/
│     └─ main.go              # Entry point of the HTTP API server
├─ internal/                  # App-specific packages (not importable by other modules)
│  ├─ config/                 # Configuration loading (env, files)
│  ├─ handlers/               # HTTP handlers/controllers (transport layer)
│  ├─ models/
│  │  └─ todo.go              # Domain models & request/response DTOs for Todo
│  ├─ repository/             # Data access layer (DB/Storage abstractions)
│  ├─ routes/
│  │  └─ routes.go            # HTTP router setup (mount handlers, middlewares)
│  └─ service/                # Business logic/services (use-cases)
├─ pkg/                       # Reusable packages (can be imported by other modules)
├─ Dockerfile                  # Docker image definition for the API
├─ docker-compose.yml         # Local composition (API + DB, etc.)
├─ Makefile                   # Common dev commands (build, run, lint, test)
├─ go.mod                     # Go module definition
└─ go.sum                     # Dependency checksums
```

## Layered Architecture (clean-ish)
- `handlers` (Transport): Parse/validate HTTP, call services, return responses.
- `service` (Use-cases): Business rules, orchestrate repositories.
- `repository` (Data): Persistence, DB queries or external APIs.
- `models`: Domain entities and DTOs.
- `routes`: Wire HTTP routes and middlewares to handlers.
- `config`: Read env and config files.

This separation eases testing and keeps business logic independent from transport and storage.

## Entry Point
- `cmd/api/main.go`: constructs config, router, dependencies (services, repos), then starts the HTTP server.

## Development

### Prerequisites
- Go 1.22+
- (Optional) Docker if using compose

### Useful Commands
If `Makefile` targets exist (adjust as needed):
```bash
make build        # Build the API
make run          # Run locally
make test         # Run tests
make docker-build # Build Docker image
make up           # docker-compose up
```

Or directly with Go:
```bash
go mod download
go run ./cmd/api
```

### Docker Compose
Bring up services (API, DB if configured):
```bash
docker compose up --build
```

## Notes
- Code under `internal/` is restricted to this module per Go convention.
- Put cross-project reusable code in `pkg/`.
- Keep HTTP-specific logic out of `service/` to maintain clean separation.
