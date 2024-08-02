Path Finding API
Description

Postman DOCS : "https://documenter.getpostman.com/view/37397155/2sA3rwLDt1"

Hostedl Link : "https://shipmnts-path-finding-api.onrender.com/"
This project is a robust Path Finding API that allows users to manage locations, roads, and traffic conditions, as well as calculate the shortest path between two points. It's built with Node.js, Express, and MongoDB, featuring JWT authentication for secure access.

Features
User Authentication: Secure signup and login using JWT.
Location Management: Create, read, update, and delete locations.
Road Management: Manage roads connecting locations.
Traffic Condition Updates: Update and fetch traffic conditions.
Shortest Path Calculation: Calculate the shortest path between two locations using Dijkstra's algorithm.
Traffic Condition Reporting: Report and get real-time traffic conditions.
Technologies Used
Node.js
Express.js
MongoDB
Mongoose
JSON Web Tokens (JWT)
bcrypt.js
Installation
Prerequisites
Make sure you have Node.js and npm installed on your machine. You also need a MongoDB Atlas account to get a connection string.

Steps
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/path-finding-api.git
Navigate to the project directory:

bash
Copy code
cd path-finding-api
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add the following:

plaintext
Copy code
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
Replace your_mongodb_connection_string with your actual MongoDB connection string and your_jwt_secret with a secret key for JWT.

Start the server:

bash
Copy code
node server.js
The server should now be running on http://localhost:3000.

API Endpoints
Authentication
POST /api/v2/signup: Register a new user.
POST /api/v2/login: Authenticate a user and get a JWT token.
Locations
GET /api/v2/locations: Get all locations.
POST /api/v2/locations: Create a new location.
PUT /api/v2/locations/
: Update an existing location.
DELETE /api/v2/locations/
: Delete a location.
Roads
GET /api/v2/roads: Get all roads.
POST /api/v2/roads: Create a new road.
PUT /api/v2/roads/
: Update an existing road.
DELETE /api/v2/roads/
: Delete a road.
Traffic Conditions
GET /api/v2/traffic-conditions: Get traffic conditions.
POST /api/v2/traffic-conditions: Report a new traffic condition.
Shortest Path
GET /api/v2/shortest-path: Calculate the shortest path between two locations.
Usage
Register a New User
bash
Copy code
curl -X POST http://localhost:3000/api/v2/signup -H "Content-Type: application/json" -d '{
  "username": "testuser",
  "password": "testpassword"
}'
Authenticate a User
bash
Copy code
curl -X POST http://localhost:3000/api/v2/login -H "Content-Type: application/json" -d '{
  "username": "testuser",
  "password": "testpassword"
}'
Create a Location
bash
Copy code
curl -X POST http://localhost:3000/api/v2/locations -H "Authorization: Bearer <JWT_TOKEN>" -H "Content-Type: application/json" -d '{
  "name": "Location A",
  "latitude": 40.7128,
  "longitude": -74.0060
}'
Fetch All Locations
bash
Copy code
curl -X GET http://localhost:3000/api/v2/locations -H "Authorization: Bearer <JWT_TOKEN>"
Calculate Shortest Path
bash
Copy code
curl -X GET http://localhost:3000/api/v2/shortest-path -H "Authorization: Bearer <JWT_TOKEN>" -d '{
  "start": "Location A",
  "end": "Location B"
}'
Replace <JWT_TOKEN> with the token you received from the login endpoint.

Contribution
Contributions are welcome! Please fork the repository and submit a pull request for any changes you would like to make.

License
This project is licensed under the MIT License.

