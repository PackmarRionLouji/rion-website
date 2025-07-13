# Variables
FRONTEND_DIR=frontend
BACKEND_DIR=service

# Declare targets that don't represent files
.PHONY: install dev frontend backend build clean bootstrap help

# Default help target
help:
	@echo "Available targets: install, dev, frontend, backend, build, clean, bootstrap"

# Installs dependencies
install:
	cd $(FRONTEND_DIR) && yarn install
	cd $(BACKEND_DIR) && yarn install

# Dev run
dev:
	cd $(BACKEND_DIR) && yarn dev &
	cd $(FRONTEND_DIR) && yarn dev

# Run frontend
frontend:
	cd $(FRONTEND_DIR) && yarn dev

# Run backend
backend:
	cd $(BACKEND_DIR) && yarn dev

# Build frontend
build:
	cd $(FRONTEND_DIR) && yarn build

# Clean build output
clean:
	rm -rf $(FRONTEND_DIR)/dist

# 🧹 Bootstrap target (place it here or at the bottom — both are fine)
bootstrap: clean
	@echo "Ensuring yarn.lock files exist..."
	touch $(FRONTEND_DIR)/yarn.lock
	touch $(BACKEND_DIR)/yarn.lock

	@echo "Removing node_modules and yarn.lock..."
	rm -rf $(FRONTEND_DIR)/node_modules
	rm -rf $(BACKEND_DIR)/node_modules

	@echo "Installing dependencies..."
	cd $(FRONTEND_DIR) && yarn install
	cd $(BACKEND_DIR) && yarn install