# Path Finding API

## Description

This project is a robust Path Finding API that allows users to manage locations, roads, and traffic conditions, as well as calculate the shortest path between two points. It's built with Node.js, Express, and MongoDB, featuring JWT authentication for secure access.

## Features

- User authentication (signup and login)
- Location management
- Road management
- Traffic condition updates
- Shortest path calculation using Dijkstra's algorithm
- Traffic condition reporting

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js

## Installation

1. Clone the repository:

git clone https://github.com/yourusername/path-finding-api.git


2. Navigate to the project directory:

cd path-finding-api


3. Install dependencies:

npm install


4. Create a `.env` file in the root directory and add the following:

MONGO_URL=your_mongodb_connection_string JWT_SECRET=your_jwt_secret PORT=3000
JWT_SECRET ="addyoursecret"

5. Start the server:

node server.js

