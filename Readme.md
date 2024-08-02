Postman DOCS : "https://documenter.getpostman.com/view/37397155/2sA3rwLDt1"

Hostedl Link : "https://shipmnts-path-finding-api.onrender.com/"
# Path Finding API

## Description

This project is a robust Path Finding API that allows users to manage locations, roads, and traffic conditions, as well as calculate the shortest path between two points. It's built with Node.js, Express, and MongoDB, featuring JWT authentication for secure access.

## Features

- **User Authentication**: Secure signup and login using JWT.
- **Location Management**: Create, read, update, and delete locations.
- **Road Management**: Manage roads connecting locations.
- **Traffic Condition Updates**: Update and fetch traffic conditions.
- **Shortest Path Calculation**: Calculate the shortest path between two locations using Dijkstra's algorithm.
- **Traffic Condition Reporting**: Report and get real-time traffic conditions.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js

## Installation

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You also need a MongoDB Atlas account to get a connection string.

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/path-finding-api.git

Steps
Clone the repository:
Install dependencies:

npm install

Set up environment variables: Create a .env file in the root directory with the following:

MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000

Start the server:

npm start

The server should now be running on http://localhost:3000.

API Endpoints
Authentication
POST /api/v1/auth/signup: Register a new user
POST /api/v1/auth/login: Authenticate and receive JWT
Locations
POST /api/v1/locations: Add a new location
GET /api/v1/locations: Retrieve all locations
Roads
POST /api/v1/roads: Add a new road
GET /api/v1/roads: Retrieve all roads
Traffic
POST /api/v1/traffic/updates: Update traffic condition
GET /api/v1/traffic-conditions/:id: Get traffic condition for a specific road
GET /api/v1/traffic-conditions/report: Generate traffic report
Path Finding
GET /api/v1/shortest-path: Calculate shortest path between two locations
Usage Examples
Register a New User
curl -X POST https://shipmnts-path-finding-api.onrender.com/api/v1/auth/signup \
     -H "Content-Type: application/json" \
     -d '{"username": "testuser", "email": "test@example.com", "password": "securepassword"}'

Login
curl -X POST https://shipmnts-path-finding-api.onrender.com/api/v1/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email": "test@example.com", "password": "securepassword"}'

Add a Location
curl -X POST https://shipmnts-path-finding-api.onrender.com/api/v1/locations \
     -H "Authorization: Bearer YOUR_JWT_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"name": "Central Park", "latitude": 40.7829, "longitude": -73.9654}'

Calculate Shortest Path
curl -X GET "https://shipmnts-path-finding-api.onrender.com/api/v1/shortest-path?start_location_id=ID1&end_location_id=ID2" \
     -H "Authorization: Bearer YOUR_JWT_TOKEN"

Replace YOUR_JWT_TOKEN with the token received from the login endpoint.

Error Handling
The API uses standard HTTP status codes and returns detailed error messages in the response body for proper client-side error handling.

Data Models
User: username, email, password (hashed)
Location: name, latitude, longitude
Road: start_location, end_location, distance, traffic_condition
TrafficUpdate: road, timestamp, traffic_condition
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository
Create a new branch: git checkout -b feature-branch-name
Make your changes and commit them: git commit -m 'Add some feature'
Push to the branch: git push origin feature-branch-name
Submit a pull request
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any queries or support, please open an issue on this GitHub repository.
