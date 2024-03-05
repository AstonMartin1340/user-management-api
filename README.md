# User Management API

This is a RESTful API built with Node.js and Express.js for managing user data. It uses PostgreSQL as the database backend and is containerized with Docker and Docker Compose.

## Prerequisites

- Node.js (version 16 or later)
- Docker
- Docker Compose

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/user-management-api.git
   
2. Navigate to the project directory:
    ```bash
	cd user-management-api
	
3. Install the dependencies:
    ```bash
	npm install
	
## Running the Application with Docker

1. Build the Docker images:
    ```bash
	docker-compose build
	
2. Start the Docker containers:
    ```bash
	docker-compose up
This will start the Node.js application and the PostgreSQL database containers.

3. The API should now be accessible at 
    ```bash
    http://localhost:3000/api/users.

## API Endpoints

POST /api/users: Create a new user
Request Body: { "first_name": "John", "last_name": "Doe", "phone": "123456789" }
Example (cURL):
    curl -X POST -H "Content-Type: application/json" -d '{"first_name": "John", "last_name": "Doe", "phone": "123456789"}' http://localhost:3000/api/users

GET /api/users/:id: Read a single user
**Example (cURL):**
    curl http://localhost:3000/api/users/1

GET /api/users: Read all users
**Example (cURL):**
    curl http://localhost:3000/api/users

PUT /api/users/:id: Update a user
Request Body: { "first_name": "Jane", "last_name": "Doe", "phone": "987654321" }
**Example (cURL):** 
    curl -X PUT -H "Content-Type: application/json" -d '{"first_name": "Jane", "last_name": "Doe", "phone": "987654321"}' http://localhost:3000/api/users/1

DELETE /api/users/:id: Delete a user
**Example (cURL):** 
    curl -X DELETE http://localhost:3000/api/users/1

## Stopping the Containers
To stop and remove the Docker containers, run:

    docker-compose down
	
	
**Make sure to replace `https://github.com/your-repo/user-management-api.git` with the actual URL of your repository, and update any other project-specific details as needed.**
