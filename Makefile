# Variables
FRONTEND_DIR=frontend
BACKEND_DIR=service

# Declare targets that don't represent files
.PHONY: install dev frontend backend build clean bootstrap help

# Default help target
help:
	@echo "Available targets: install, dev, frontend, backend, build, clean, bootstrap"

# Installs dependencies (Run from root for workspaces)
install:
	yarn install

# Dev run
dev:
	yarn workspace service dev &
	yarn workspace frontend dev

# Run frontend
frontend:
	yarn workspace frontend dev

# Run backend
backend:
	yarn workspace service dev

# Build frontend
build:
	yarn workspace frontend build

# Clean build output
clean:
	rm -rf $(FRONTEND_DIR)/dist

# 🧹 Bootstrap target
bootstrap:
	rm -rf package-lock.json yarn.lock node_modules
	rm -rf $(FRONTEND_DIR)/node_modules $(FRONTEND_DIR)/dist
	rm -rf $(BACKEND_DIR)/node_modules
	yarn install
	@echo "✨ Bootstrap complete!"